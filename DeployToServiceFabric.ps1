#Package the Node JS application
# .\ServiceFabricAppPackageUtil.exe /source:'A:\LordKrishna\Samples_Github\CocktailNodeApi' /target:'A:\LordKrishna\Samples_Github\Pre-Release-SFPackagingTool\Outputs\CocktailNodeApi' /appname:NodeService /exe:'node.exe' /ma:'bin/www' /AppType:NodeAppType


#Connect to Local Service Fabric Cluster
Connect-ServiceFabricCluster localhost:19000

#Deploy to Local Service Fabric Cluster
Write-Host 'Copying application package...'
Copy-ServiceFabricApplicationPackage -ApplicationPackagePath 'A:\LordKrishna\Samples_Github\Pre-Release-SFPackagingTool\Outputs\CocktailNodeApi' -ImageStoreConnectionString 'file:C:\SfDevCluster\Data\ImageStoreShare' -ApplicationPackagePathInImageStore 'Store\NodeAppType'

Write-Host 'Registering application type...'
Register-ServiceFabricApplicationType -ApplicationPathInImageStore 'Store\NodeAppType'

New-ServiceFabricApplication -ApplicationName 'fabric:/NodeApp' -ApplicationTypeName 'NodeAppType' -ApplicationTypeVersion 1.0  

