#!/bin/bash

spdx="// SPDX-License-Identifier: MIT"
copyright="// Copyright Giacomo Gagliano and Zion Protocol contributors\n"
pragma="pragma solidity ^0.8.0;\n"

baseName=${PWD##*/}

contractFile=${baseName}
interfaceFile=I${contractFile}
privateFile=Private${baseName}
iprivateFile=I${privateFile}
aprivateFile=A${privateFile}

privateDir=secure
interfaceDir=interfaces
extensionsDir=extensions

fileExtension=.sol

contract=${contractFile}${fileExtension}
privatecontract=${privateDir}/${privateFile}${fileExtension}
iprivate=${privateDir}/${iprivateFile}${fileExtension}
aprivate=${privateDir}/${aprivateFile}${fileExtension}
interface=${interfaceDir}/${interfaceFile}${fileExtension}


mkdir ${privateDir} &&
mkdir ${interfaceDir} &&
mkdir ${extensionsDir} &&
touch ${contract} &&
touch ${privatecontract} &&
touch ${aprivate} &&
touch ${iprivate} &&
touch ${interface} &&

# contract
echo ${spdx} >> ${contract}
echo ${copyright} >> ${contract}
echo ${pragma} >> ${contract}
echo "import './${interface}';" >> ${contract}
echo "import './${privatecontract}';\n" >> ${contract}
echo "contract ${contractFile} is ${interfaceFile}, ${privateFile} {}" >> ${contract}

# private
echo ${spdx} >> ${privatecontract}
echo ${copyright} >> ${privatecontract}
echo ${pragma} >> ${privatecontract}
echo "import './${aprivateFile}${fileExtension}';\n" >> ${privatecontract}
echo "contract ${privateFile} is ${aprivateFile} {}" >> ${privatecontract}

# # aprivate
echo ${spdx} >> ${aprivate}
echo ${copyright} >> ${aprivate}
echo ${pragma} >> ${aprivate}
echo "import './${iprivateFile}${fileExtension}';\n" >> ${aprivate}
echo "abstract contract ${aprivateFile} is ${iprivateFile} {}" >> ${aprivate}

# # iprivate
echo ${spdx} >> ${iprivate}
echo ${copyright} >> ${iprivate}
echo ${pragma} >> ${iprivate}
echo "interface ${iprivateFile} {}" >> ${iprivate}

# # # interface
echo ${spdx} >> ${interface}
echo ${copyright} >> ${interface}
echo ${pragma} >> ${interface}
echo "import '../${iprivate}';\n" >> ${interface}
echo "interface ${interfaceFile} is ${iprivateFile} {}" >> ${interface}

echo "Files created ${baseName}"