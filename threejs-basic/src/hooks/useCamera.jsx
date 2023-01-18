import React from "react";
import { useEffect } from "react";
import * as THREE from "three";
export const useCamera = () => {
  const workinWithCamera = () => {
    const scene = new THREE.Scene();
  };
  useEffect(() => {
    workinWithCamera();
  }, []);
};
