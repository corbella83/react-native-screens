import React, { useState } from "react";
import clsx from "clsx";
import useScreenSize from '@site/src/hooks/useScreenSize';
import styles from './styles.module.css'

  const screens = [
    [
      { fill: "#C1C6E5", d: "M354.51 5.757c0-4.708 2.839-6.616 6.341-4.262l128.22 86.192c3.502 2.354 6.34 8.08 6.34 12.787v290.783c0 4.708-2.838 6.616-6.34 4.262l-128.22-86.193c-3.502-2.354-6.341-8.079-6.341-12.787V5.757z" },
      { fill: "#C1C6E5", d: "M495.411 157.305v-56.831c0-4.708-2.838-10.433-6.34-12.787L360.851 1.495c-3.502-2.354-6.341-.446-6.341 4.262v56.83l140.901 94.718z" },
      { fill: "#C1C6E5", d: "M379.982 30.775c.894 1.803.894 3.752 0 4.353l-8.949 6.016 8.949 18.046c.894 1.803.894 3.753 0 4.354-.894.6-2.344-.374-3.238-2.177l-10.568-21.311c-.894-1.804-.894-3.753 0-4.354l10.568-7.104c.894-.6 2.344.374 3.238 2.177z" },
    ],
    [
      { fill: "#919FCF", d: "M283.608 5.757c0-4.708 2.839-6.616 6.341-4.262l128.22 86.192c3.501 2.354 6.34 8.08 6.34 12.787v290.783c0 4.708-2.839 6.616-6.34 4.262l-128.221-86.193c-3.501-2.354-6.34-8.079-6.34-12.787V5.757z" },
      { fill: "#919FCF", d: "M424.508 157.305l.001-56.831c0-4.708-2.839-10.433-6.34-12.787L289.949 1.495c-3.502-2.354-6.341-.446-6.341 4.262l-.001 56.83 140.901 94.718z" },
      { fill: "#919FCF", d: "M309.079 30.775c.895 1.803.895 3.752 0 4.353l-8.948 6.016 8.948 18.046c.895 1.803.895 3.753 0 4.354-.894.6-2.344-.374-3.238-2.177l-10.567-21.311c-.894-1.804-.894-3.753 0-4.354l10.567-7.104c.894-.6 2.344.374 3.238 2.177z" },
    ],
    [
      { fill: "#6676AA", d: "M212.706 5.757c0-4.708 2.839-6.616 6.34-4.262l128.22 86.192c3.502 2.354 6.341 8.08 6.341 12.787v290.783c0 4.708-2.839 6.616-6.341 4.262l-128.22-86.193c-3.502-2.354-6.34-8.079-6.34-12.787V5.757z" },
      { fill: "#6676AA", d: "M353.606 157.305l.001-56.831c0-4.708-2.839-10.433-6.341-12.787L219.046 1.495c-3.501-2.354-6.34-.446-6.34 4.262l-.001 56.83 140.901 94.718z" },
      { fill: "#6676AA", d: "M238.177 30.775c.894 1.803.894 3.752 0 4.353l-8.949 6.016 8.949 18.046c.894 1.803.894 3.753 0 4.354-.894.6-2.344-.374-3.238-2.177l-10.568-21.311c-.894-1.804-.894-3.753 0-4.354l10.568-7.104c.894-.6 2.344.374 3.238 2.177z" },
    ],
    [
      { fill: "#33488E", d: "M141.804 5.757c0-4.708 2.839-6.616 6.341-4.262l128.22 86.192c3.502 2.354 6.34 8.08 6.34 12.787v290.783c0 4.708-2.838 6.616-6.34 4.262l-128.22-86.193c-3.502-2.354-6.341-8.079-6.341-12.787V5.757z" },
      { fill: "#33488E", d: "M282.705 157.305v-56.831c0-4.708-2.838-10.433-6.34-12.787L148.145 1.495c-3.502-2.354-6.341-.446-6.341 4.262v56.83l140.901 94.718z" },
      { fill: "#33488E", d: "M167.276 30.775c.894 1.803.894 3.752 0 4.353l-8.949 6.016 8.949 18.046c.894 1.803.894 3.753 0 4.354-.895.6-2.344-.374-3.238-2.177L153.47 40.056c-.894-1.804-.894-3.753 0-4.354l10.568-7.104c.894-.6 2.343.374 3.238 2.177z" },
    ],
    [
      { fill: "#001A72", d: "M70.903 5.757c0-4.708 2.839-6.616 6.34-4.262l128.22 86.192c3.502 2.354 6.341 8.08 6.341 12.787v290.783c0 4.708-2.839 6.616-6.341 4.262l-128.22-86.193c-3.501-2.354-6.34-8.079-6.34-12.787V5.757z" },
      { fill: "#001A72", d: "M211.803 157.305l.001-56.831c0-4.708-2.839-10.433-6.341-12.787L77.243 1.495c-3.501-2.354-6.34-.446-6.34 4.262v56.83l140.9 94.718z" },
      { fill: "#001A72", d: "M96.374 30.775c.894 1.803.894 3.752 0 4.353l-8.948 6.016 8.948 18.046c.894 1.803.894 3.753 0 4.354-.894.6-2.344-.374-3.238-2.177L82.57 40.056c-.895-1.804-.895-3.753 0-4.354l10.567-7.104c.894-.6 2.344.374 3.238 2.177z" }
    ],
    [
     {
       fill: "#76C7FA",
       d: "M0 5.757C0 1.049 2.84-.86 6.342 1.495l128.22 86.192c3.502 2.354 6.341 8.08 6.341 12.787v290.783c0 4.708-2.839 6.616-6.341 4.262L6.341 309.326c-3.502-2.354-6.34-8.079-6.34-12.787V5.757z"
     },
     {
       fill: "#A6DBFC",
       d: "M140.901 157.305l.001-56.831c0-4.708-2.839-10.433-6.341-12.787L6.341 1.495C2.84-.86.001 1.049.001 5.757L0 62.587l140.901 94.718z"
     },
     {
       fll: "#1A30AD",
       d: "M25.472 30.775c.894 1.803.894 3.752 0 4.353l-8.949 6.016 8.949 18.046c.894 1.803.894 3.753 0 4.354-.894.6-2.344-.374-3.238-2.177L11.666 40.056c-.894-1.804-.894-3.753 0-4.354l10.568-7.104c.894-.6 2.344.374 3.238 2.177z"
     }
    ]
  ]

  const ScreensIcon = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const { windowWidth } = useScreenSize()
  
    return (
      <svg
      width={
        windowWidth *
        (windowWidth < 768 ? 0.4 : windowWidth < 996 ? 0.45 : windowWidth < 1350 ? 0.4 : windowWidth > 2000 ? 0.25 : 0.35)
      }
        viewBox="0 0 600 400"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
      >
        {screens.map((screen, index) => (
          <g
            key={index}
            className={clsx(styles.screenGroup, hoveredIndex === index ? styles.hovered : (hoveredIndex === index - 1 || hoveredIndex === index + 1) && styles.neighbourHovered)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {screen.map((path, i) => (
              // <path key={i} fill={hoveredIndex === index ? 'none' : path.fill} stroke={hoveredIndex === index ? path.fill : "none"} strokeWidth={hoveredIndex === index ? 2 : 0} d={path.d} />
              <path key={i} fill={path.fill} d={path.d}/>
            ))}
          </g>
        ))}
      </svg>
    );
  };
  
  export default ScreensIcon;