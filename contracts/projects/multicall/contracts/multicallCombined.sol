/**
 *Submitted for verification at BscScan.com on 2022-03-09
 */

// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;

/// @title Multicall3 combined with Pancakeswap UI Multicall
/// @notice Aggregate results from multiple function calls
contract MulticallCombined {
    struct Call {
        address target;
        bytes callData;
    }

    struct Call3 {
        address target;
        bool allowFailure;
        bytes callData;
    }

    struct Call3Value {
        address target;
        bool allowFailure;
        uint256 value;
        bytes callData;
    }

    struct CallGas {
        address target;
        uint256 gasLimit;
        bytes callData;
    }

    struct CallGasValue {
        address target;
        uint256 value;
        uint256 gasLimit;
        bytes callData;
    }

    struct Result {
        bool success;
        bytes returnData;
    }

    struct ResultGas {
        bool success;
        uint256 gasUsed;
        bytes returnData;
    }

    /// @notice Backwards-compatible call aggregation with Multicall
    /// @param calls An array of Call structs
    /// @return blockNumber The block number where the calls were executed
    /// @return returnData An array of bytes containing the responses
    function aggregate(Call[] calldata calls) public payable returns (uint256 blockNumber, bytes[] memory returnData) {
        blockNumber = block.number;
        uint256 length = calls.length;
        returnData = new bytes[](length);
        Call calldata call;
        for (uint256 i = 0; i < length; ) {
            bool success;
            call = calls[i];
            (success, returnData[i]) = call.target.call(call.callData);
            require(success, "Multicall3: call failed");
            unchecked {
                ++i;
            }
        }
    }

    /// @notice Backwards-compatible with Multicall2
    /// @notice Aggregate calls without requiring success
    /// @param requireSuccess If true, require all calls to succeed
    /// @param calls An array of Call structs
    /// @return returnData An array of Result structs
    function tryAggregate(
        bool requireSuccess,
        Call[] calldata calls
    ) public payable returns (Result[] memory returnData) {
        uint256 length = calls.length;
        returnData = new Result[](length);
        Call calldata call;
        for (uint256 i = 0; i < length; ) {
            Result memory result = returnData[i];
            call = calls[i];
            (result.success, result.returnData) = call.target.call(call.callData);
            if (requireSuccess) require(result.success, "Multicall3: call failed");
            unchecked {
                ++i;
            }
        }
    }

    /// @notice Backwards-compatible with Multicall2
    /// @notice Aggregate calls and allow failures using tryAggregate
    /// @param calls An array of Call structs
    /// @return blockNumber The block number where the calls were executed
    /// @return blockHash The hash of the block where the calls were executed
    /// @return returnData An array of Result structs
    function tryBlockAndAggregate(
        bool requireSuccess,
        Call[] calldata calls
    ) public payable returns (uint256 blockNumber, bytes32 blockHash, Result[] memory returnData) {
        blockNumber = block.number;
        blockHash = blockhash(block.number);
        returnData = tryAggregate(requireSuccess, calls);
    }

    /// @notice Backwards-compatible with Multicall2
    /// @notice Aggregate calls and allow failures using tryAggregate
    /// @param calls An array of Call structs
    /// @return blockNumber The block number where the calls were executed
    /// @return blockHash The hash of the block where the calls were executed
    /// @return returnData An array of Result structs
    function blockAndAggregate(
        Call[] calldata calls
    ) public payable returns (uint256 blockNumber, bytes32 blockHash, Result[] memory returnData) {
        (blockNumber, blockHash, returnData) = tryBlockAndAggregate(true, calls);
    }

    /// @notice Aggregate calls, ensuring each returns success if required
    /// @param calls An array of Call3 structs
    /// @return returnData An array of Result structs
    function aggregate3(Call3[] calldata calls) public payable returns (Result[] memory returnData) {
        uint256 length = calls.length;
        returnData = new Result[](length);
        Call3 calldata calli;
        for (uint256 i = 0; i < length; ) {
            Result memory result = returnData[i];
            calli = calls[i];
            (result.success, result.returnData) = calli.target.call(calli.callData);
            assembly {
            // Revert if the call fails and failure is not allowed
            // `allowFailure := calldataload(add(calli, 0x20))` and `success := mload(result)`
                if iszero(or(calldataload(add(calli, 0x20)), mload(result))) {
                // set "Error(string)" signature: bytes32(bytes4(keccak256("Error(string)")))
                    mstore(0x00, 0x08c379a000000000000000000000000000000000000000000000000000000000)
                // set data offset
                    mstore(0x04, 0x0000000000000000000000000000000000000000000000000000000000000020)
                // set length of revert string
                    mstore(0x24, 0x0000000000000000000000000000000000000000000000000000000000000017)
                // set revert string: bytes32(abi.encodePacked("Multicall3: call failed"))
                    mstore(0x44, 0x4d756c746963616c6c333a2063616c6c206661696c6564000000000000000000)
                    revert(0x00, 0x64)
                }
            }
            unchecked {
                ++i;
            }
        }
    }

    /// @notice Aggregate calls with a msg value
    /// @notice Reverts if msg.value is less than the sum of the call values
    /// @param calls An array of Call3Value structs
    /// @return returnData An array of Result structs
    function aggregate3Value(Call3Value[] calldata calls) public payable returns (Result[] memory returnData) {
        uint256 valAccumulator;
        uint256 length = calls.length;
        returnData = new Result[](length);
        Call3Value calldata calli;
        for (uint256 i = 0; i < length; ) {
            Result memory result = returnData[i];
            calli = calls[i];
            uint256 val = calli.value;
            // Humanity will be a Type V Kardashev Civilization before this overflows - andreas
            // ~ 10^25 Wei in existence << ~ 10^76 size uint fits in a uint256
            unchecked {
                valAccumulator += val;
            }
            (result.success, result.returnData) = calli.target.call{value: val}(calli.callData);
            assembly {
            // Revert if the call fails and failure is not allowed
            // `allowFailure := calldataload(add(calli, 0x20))` and `success := mload(result)`
                if iszero(or(calldataload(add(calli, 0x20)), mload(result))) {
                // set "Error(string)" signature: bytes32(bytes4(keccak256("Error(string)")))
                    mstore(0x00, 0x08c379a000000000000000000000000000000000000000000000000000000000)
                // set data offset
                    mstore(0x04, 0x0000000000000000000000000000000000000000000000000000000000000020)
                // set length of revert string
                    mstore(0x24, 0x0000000000000000000000000000000000000000000000000000000000000017)
                // set revert string: bytes32(abi.encodePacked("Multicall3: call failed"))
                    mstore(0x44, 0x4d756c746963616c6c333a2063616c6c206661696c6564000000000000000000)
                    revert(0x00, 0x84)
                }
            }
            unchecked {
                ++i;
            }
        }
        // Finally, make sure the msg.value = SUM(call[0...i].value)
        require(msg.value == valAccumulator, "Multicall3: value mismatch");
    }

    function multicall(CallGas[] memory calls) public returns (uint256 blockNumber, ResultGas[] memory returnData) {
        blockNumber = block.number;
        returnData = new ResultGas[](calls.length);

        for (uint256 i = 0; i < calls.length; i++) {
            (address target, uint256 gasLimit, bytes memory callData) = (
                calls[i].target,
                calls[i].gasLimit,
                calls[i].callData
            );

            uint256 gasLeftBefore = gasleft();
            (bool success, bytes memory ret) = target.call{gas: gasLimit}(callData);
            uint256 gasUsed = gasLeftBefore - gasleft();
            returnData[i] = ResultGas(success, gasUsed, ret);
        }
    }

    function multicallWithGasLimitation(
        CallGas[] memory calls,
        uint256 gasBuffer
    ) public returns (uint256 blockNumber, ResultGas[] memory returnData) {
        blockNumber = block.number;
        returnData = new ResultGas[](calls.length);

        for (uint256 i = 0; i < calls.length; i++) {
            (address target, uint256 gasLimit, bytes memory callData) = (
                calls[i].target,
                calls[i].gasLimit,
                calls[i].callData
            );

            uint256 gasLeftBefore = gasleft();
            if (gasLeftBefore <= gasBuffer) {
                assembly {
                    mstore(returnData, i) // set actual length of returnData
                }
                return (blockNumber, returnData);
            } else if (gasLeftBefore - gasBuffer < gasLimit) {
                gasLimit = gasLeftBefore - gasBuffer;
            }
            (bool success, bytes memory ret) = target.call{gas: gasLimit}(callData);
            uint256 gasUsed = gasLeftBefore - gasleft();

            returnData[i] = ResultGas(success, gasUsed, ret);

            if (gasleft() < gasBuffer + gasLimit / 10) {
                assembly {
                    mstore(returnData, add(i, 1)) // set actual length of returnData
                }

                return (blockNumber, returnData);
            }
        }

        return (blockNumber, returnData);
    }

    function multicallWithGasLimitationValue(
        CallGasValue[] memory calls,
        uint256 gasBuffer
    ) public payable returns (uint256 blockNumber, ResultGas[] memory returnData, uint256 lastSuccessIndex) {
        blockNumber = block.number;
        returnData = new ResultGas[](calls.length);

        for (uint256 i = 0; i < calls.length; i++) {
            (address target, uint256 value, uint256 gasLimit, bytes memory callData) = (
                calls[i].target,
                calls[i].value,
                calls[i].gasLimit,
                calls[i].callData
            );

            uint256 gasLeftBefore = gasleft();
            if (gasLeftBefore <= gasBuffer) {
                return (blockNumber, returnData, i);
            } else if (gasLeftBefore - gasBuffer < gasLimit) {
                gasLimit = gasLeftBefore - gasBuffer;
            }
            (bool success, bytes memory ret) = target.call{gas: gasLimit, value: value}(callData);
            uint256 gasUsed = gasLeftBefore - gasleft();

            if (gasleft() < gasBuffer + gasLimit / 10) {
                // call only passes 63/64 of all gas, really strange rule.
                // with multiple nested calls, this can result in part of the TX running out of gas without the call itself reverting
                // don't save last call as it ran out of gas
                return (blockNumber, returnData, i);
            }

            returnData[i] = ResultGas(success, gasUsed, ret);
        }

        return (blockNumber, returnData, calls.length);
    }

    function deployContract(bytes memory contractBytecode) external returns (address contractAddr) {
        assembly {
            contractAddr := create(0, add(contractBytecode, 0x20), mload(contractBytecode))
            if iszero(contractAddr) {
                revert(0, 0)
            }
        }
    }

    function gaslimit() external view returns (uint256) {
        return block.gaslimit;
    }

    function gasLeft() external view returns (uint256) {
        return gasleft();
    }

    /// @notice Returns the block hash for the given block number
    /// @param blockNumber The block number
    function getBlockHash(uint256 blockNumber) public view returns (bytes32 blockHash) {
        blockHash = blockhash(blockNumber);
    }

    /// @notice Returns the block number
    function getBlockNumber() public view returns (uint256 blockNumber) {
        blockNumber = block.number;
    }

    /// @notice Returns the block coinbase
    function getCurrentBlockCoinbase() public view returns (address coinbase) {
        coinbase = block.coinbase;
    }

    /// @notice Returns the block difficulty
    function getCurrentBlockDifficulty() public view returns (uint256 difficulty) {
        difficulty = block.difficulty;
    }

    /// @notice Returns the block gas limit
    function getCurrentBlockGasLimit() public view returns (uint256 _gaslimit) {
        _gaslimit = block.gaslimit;
    }

    /// @notice Returns the block timestamp
    function getCurrentBlockTimestamp() public view returns (uint256 timestamp) {
        timestamp = block.timestamp;
    }

    /// @notice Returns the (ETH) balance of a given address
    function getEthBalance(address addr) public view returns (uint256 balance) {
        balance = addr.balance;
    }

    /// @notice Returns the block hash of the last block
    function getLastBlockHash() public view returns (bytes32 blockHash) {
        unchecked {
            blockHash = blockhash(block.number - 1);
        }
    }

    /// @notice Gets the base fee of the given block
    /// @notice Can revert if the BASEFEE opcode is not implemented by the given chain
    function getBasefee() public view returns (uint256 basefee) {
        basefee = block.basefee;
    }

    /// @notice Returns the chain id
    function getChainId() public view returns (uint256 chainid) {
        chainid = block.chainid;
    }
}
