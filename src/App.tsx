import * as Cesium from 'cesium';
import './App.scss'
import {useEffect, useRef} from "react";

function App() {
    const cesiumContainer = useRef()

    useEffect(() => {
        if (!cesiumContainer) return

        const viewer = new Cesium.Viewer(cesiumContainer.current);

        let provider = new Cesium.WebMapTileServiceImageryProvider({        //创建一个图层（geoserver中的tif）
            url: 'http://127.0.0.1:8081/geoserver/gwc/service/wmts/rest/cesium-demo:ASTGTM2_N05W058_dem/{style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}?format=image/png',
            layer: 'cesium-demo:ASTGTM2_N05W058_dem',
            style: '',
            format: 'image/png',
            tilingScheme: new Cesium.GeographicTilingScheme(),
            tileMatrixSetID: 'EPSG:4326',
            tileMatrixLabels: ['EPSG:4326:0', 'EPSG:4326:1', 'EPSG:4326:2', 'EPSG:4326:3', 'EPSG:4326:4', 'EPSG:4326:5', 'EPSG:4326:6', 'EPSG:4326:7', 'EPSG:4326:8', 'EPSG:4326:9', 'EPSG:4326:10', 'EPSG:4326:11', 'EPSG:4326:12', 'EPSG:4326:13', 'EPSG:4326:14', 'EPSG:4326:15', 'EPSG:4326:16', 'EPSG:4326:17', 'EPSG:4326:18', 'EPSG:4326:19', 'EPSG:4326:20', 'EPSG:4326:21'],
            maximumLevel: 15
        });

        viewer.imageryLayers.addImageryProvider(provider);

        viewer.camera.setView({
            destination: Cesium.Cartesian3.fromDegrees(-57.48,5.83, 300000.0),   // 经纬度和高度
        });
    }, [cesiumContainer.current])


    return (
        <div ref={cesiumContainer}>
        </div>
    )
}

export default App
