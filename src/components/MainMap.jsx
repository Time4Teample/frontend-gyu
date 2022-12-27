import { Map, CustomOverlayMap } from 'react-kakao-maps-sdk';
import * as React from 'react';
import LectureInfo from './LectureInfo';

export default function MainMap() {
    return (
        <>

        <Map // 지도를 표시할 Container
        center={{ lat: 37.4029976, lng: 127.1314306 }}
        style={{
          // 지도의 크기
          width: "100%",
          height: "100%",
        }}
        level={4} // 지도의 확대 레벨
      >
        <CustomOverlayMap // 커스텀 오버레이를 표시할 Container
          // 커스텀 오버레이가 표시될 위치입니다
          position={{
            lat: 37.4029976,
            lng: 127.1314306,
          }}
          // 커스텀 오버레이가에 대한 확장 옵션
          xAnchor={0.3}
          yAnchor={0.91}
        >
          <LectureInfo />
        </CustomOverlayMap>
        <CustomOverlayMap // 커스텀 오버레이를 표시할 Container
          // 커스텀 오버레이가 표시될 위치입니다
          position={{
            lat: 37.4029976,
            lng: 127.1314306,
          }}
          // 커스텀 오버레이가에 대한 확장 옵션
          xAnchor={0.3}
          yAnchor={0.91}
        >
          <LectureInfo />
        </CustomOverlayMap>
      </Map>
      </>
    );
}