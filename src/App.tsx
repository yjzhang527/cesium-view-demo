import * as Cesium from 'cesium';
import './App.scss'
import {useEffect, useRef} from "react";

function App() {
    const cesiumContainer = useRef()

    useEffect(() => {
        if (!cesiumContainer) return

        const viewer = new Cesium.Viewer(cesiumContainer.current, {
            animation: false, // 左下角 圆盘动画控件
            timeline: false, //时间轴
            fullscreenButton: false, //右下角 全屏控件
            // scene3DOnly: true, // 每个几何实例仅以3D渲染以节省GPU内存
        });
        viewer._cesiumWidget._creditContainer.style.display = "none"; //隐藏版本信息

        let provider = new Cesium.WebMapTileServiceImageryProvider({        //创建一个图层（geoserver中的tif）
            url: 'http://localhost:8081/geoserver/gwc/service/wmts/rest/cesium-demo:LC08_L2SP_121039_20220115_20220123_02_T1_SR_B1/{style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}?format=image/png',
            layer: 'cesium-demo:LC08_L2SP_121039_20220115_20220123_02_T1_SR_B1',
            style: '',
            format: 'image/png',
            tilingScheme: new Cesium.GeographicTilingScheme(),
            tileMatrixSetID: 'EPSG:4326',
            tileMatrixLabels: ['EPSG:4326:0', 'EPSG:4326:1', 'EPSG:4326:2', 'EPSG:4326:3', 'EPSG:4326:4', 'EPSG:4326:5', 'EPSG:4326:6', 'EPSG:4326:7', 'EPSG:4326:8', 'EPSG:4326:9', 'EPSG:4326:10', 'EPSG:4326:11', 'EPSG:4326:12', 'EPSG:4326:13', 'EPSG:4326:14', 'EPSG:4326:15', 'EPSG:4326:16', 'EPSG:4326:17', 'EPSG:4326:18', 'EPSG:4326:19', 'EPSG:4326:20', 'EPSG:4326:21'],
            maximumLevel: 15
        });

        viewer.imageryLayers.addImageryProvider(provider);

        viewer.camera.setView({
            destination: Cesium.Cartesian3.fromDegrees(-57.48, 5.83, 300000.0),   // 经纬度和高度
        });
    }, [cesiumContainer.current])


    return (
        <div ref={cesiumContainer}>
        </div>
    )
}

export default App
