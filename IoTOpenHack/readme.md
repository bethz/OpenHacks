

# IoTOpenHack.md

This hack is to investigate IoT, IoT Edge as well as Azure Streaming Analytics, DataBricks and more.
No step by step is provided and it is based on a "learn by doing" approach.

# Our favorite URLs:

https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-get-started
 
https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-store-data-in-azure-table-storage
 
https://docs.microsoft.com/en-gb/azure/iot-edge/tutorial-simulate-device-windows
 
https://docs.microsoft.com/en-us/azure/azure-databricks/databricks-stream-from-eventhubs
 
https://docs.azuredatabricks.net/spark/latest/structured-streaming/streaming-event-hubs.html
 
https://github.com/Azure/azure-event-hubs-spark/blob/master/docs/structured-streaming-eventhubs-integration.md 


# Writing a stream from DataBricks to CosmosDB

https://databricks.com/blog/2017/04/04/real-time-end-to-end-integration-with-apache-kafka-in-apache-sparks-structured-streaming.html 

https://github.com/Azure/azure-event-hubs-spark/blob/master/docs/structured-streaming-eventhubs-integration.md 

https://docs.azuredatabricks.net/spark/latest/structured-streaming/streaming-event-hubs.html 

Example of writing from stream to file
val archivestream = (archivedata_w_partitions.writeStream
.outputMode("append")
.option("compression", "gzip")
.option("checkpointLocation", "wasbs://<StorageContainer>@<StorageAccountName>.blob.core.windows.net/progressdir/")
.format("json").option("path", "wasbs://<StorageContainer>@<StorageAccountName>.blob.core.windows.net/data/")
.partitionBy("year", "month", "day").start()) 
the file can be in blob storage
just need checkpoint location
wasb:// is the indication it is blob
