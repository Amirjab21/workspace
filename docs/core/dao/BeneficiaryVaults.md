# BeneficiaryVaults
***
## Functions:
- [`constructor()`](#constructor)
- [`getVault()`](#getvault)
- [`hasClaimed()`](#hasclaimed)
- [`vaultExists()`](#vaultexists)
- [`openVault()`](#openvault)
- [`closeVault()`](#closevault)
- [`verifyClaim()`](#verifyclaim)
- [`claimReward()`](#claimreward)
- [`allocateRewards()`](#allocaterewards)
## Events:
- [`VaultOpened`](#vaultopened)
- [`VaultClosed`](#vaultclosed)
- [`RewardsAllocated`](#rewardsallocated)
- [`RewardClaimed`](#rewardclaimed)
## Modifiers:
- [`_vaultExists()`](#_vaultexists)
## Graphs:
- [Dependency Graph](#dependency-graph)
- [Inheritance Graph](#inheritance-graph)
***
## Function Definitions:
###  constructor()
```
constructor(contract IContractRegistry _contractRegistry) public 
```
###  getVault()
```
getVault(uint8 _vaultId) public  returns (uint256 totalAllocated, uint256 currentBalance, uint256 unclaimedShare, bytes32 merkleRoot, enum BeneficiaryVaults.VaultStatus status)
```
###  hasClaimed()
```
hasClaimed(uint8 _vaultId, address _beneficiary) public  returns (bool)
```
###  vaultExists()
```
vaultExists(uint8 _vaultId) public  returns (bool)
```
###  openVault()
```
openVault(uint8 _vaultId, bytes32 _merkleRoot) public 
```
Vault cannot be initialized if it is currently in an open state, otherwise existing data is reset*

| Parameter Name | Type | Description |
|------------|-----| -------|
| `_vaultId`| uint8| Vault ID in range 0-2|
| `_merkleRoot`| bytes32| Merkle root to support claims|

###  closeVault()
```
closeVault(uint8 _vaultId) public 
```
Vault must be in an open state

| Parameter Name | Type | Description |
|------------|-----| -------|
| `_vaultId`| uint8| Vault ID in range 0-2|

###  verifyClaim()
```
verifyClaim(uint8 _vaultId, bytes32[] _proof, address _beneficiary, uint256 _share) public  returns (bool)
```

| Parameter Name | Type | Description |
|------------|-----| -------|
| `_vaultId`| uint8| Vault ID in range 0-2|
| `_proof`| bytes32[]| Merkle proof of path to leaf element|
| `_beneficiary`| address| Beneficiary address encoded in leaf element|
| `_share`| uint256| Beneficiary expected share encoded in leaf element|

#### Return Values:

| Return Name | Type | Description |
|-------------|-------|------------|
|Returns| uint8|boolean true or false if claim is valid|

###  claimReward()
```
claimReward(uint8 _vaultId, bytes32[] _proof, address _beneficiary, uint256 _share) public 
```
Applies any outstanding rewards before processing claim

| Parameter Name | Type | Description |
|------------|-----| -------|
| `_vaultId`| uint8| Vault ID in range 0-2|
| `_proof`| bytes32[]| Merkle proof of path to leaf element|
| `_beneficiary`| address| Beneficiary address encoded in leaf element|
| `_share`| uint256| Beneficiary expected share encoded in leaf element|

###  allocateRewards()
```
allocateRewards() public 
```
Requires at least one open vault
## Events
### VaultOpened
```
VaultOpened(uint8 vaultId, bytes32 merkleRoot)
```
### VaultClosed
```
VaultClosed(uint8 vaultId)
```
### RewardsAllocated
```
RewardsAllocated(uint256 amount)
```
### RewardClaimed
```
RewardClaimed(uint8 vaultId, address beneficiary, uint256 amount)
```
## Modifiers
### `_vaultExists()`
```
_vaultExists(uint8 _vaultId)
```
## Graphs
### Dependency Graph
![Dependency Graph](/docs/images/BeneficiaryVaults_dependency_graph.png)
### Inheritance Graph
![Inheritance Graph](/docs/images/BeneficiaryVaults_inheritance_graph.png)