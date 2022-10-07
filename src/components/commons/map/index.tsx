import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function Map(props: any) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=29f857c175c52b6c3be2f8b8e29d986f&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(props.lat, props.lng),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);
        map.setDraggable(false); // 이동불가 설정
        map.setZoomable(false); // 확대, 축소 불가
        let centerPosition; // 원의 중심좌표
        let drawingCircle; // 그려지고 있는 원을 표시할 원 객체
        let drawingOverlay: any; // 그려지고 있는 원의 반경을 표시할 커스텀오버레이

        centerPosition = map.getCenter();

        drawingCircle = new window.kakao.maps.Circle({
          radius: 100,
          strokeWeight: 0,
          strokeColor: "000",
          strokeOpacity: 0.1,
          fillColor: "rgba(0,0,0,1)", // 채우기 색깔
          fillOpacity: 0.2, // 채우기 불투명도
        });

        let circleOptions = {
          center: centerPosition,
        };

        drawingCircle.setOptions(circleOptions);

        let radius = 100; // 반지름 m 단위

        drawingOverlay?.setPosition?.(centerPosition);
        drawingCircle?.setMap(map);
      });
    };
  }, [props]);

  return <div id="map" style={{ width: "100%", height: "100%" }}></div>;
}
