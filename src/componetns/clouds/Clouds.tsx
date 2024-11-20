import React, { useEffect, useState } from "react";
import "./Clouds.css";

interface CloudsProps {
    isVisible: boolean;
}

const Clouds: React.FC<CloudsProps> = ({ isVisible }) => {
    const [cloudVisible, setCloudVisible] = useState(isVisible);

    useEffect(() => {
        if (isVisible) {
            setCloudVisible(true);
        } else {
            // С задержкой плавно исчезаем
            const timer = setTimeout(() => setCloudVisible(false), 500); // 500 ms задержка
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    return (
        <div className={`clouds-container ${cloudVisible ? "visible" : "hidden"}`}>
            <img className="cloud cloud1" src="/images/cloud.png" alt="Cloud 1" />
            <img className="cloud cloud2" src="/images/cloud-2.png" alt="Cloud 2" />
        </div>
    );
};

export default Clouds;
