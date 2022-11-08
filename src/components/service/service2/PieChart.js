import * as React from 'react';
import { ResponsivePie } from '@nivo/pie';

import styles from './Service2Analysis.module.css';



function PieChart({ data, colors }) {
    return (
        <div className={styles.chartContainer}>
            <ResponsivePie
                data={[
                    { id: "교통", value: data[0] },
                    { id: "통신", value: data[1] },
                    { id: "마트", value: data[2] },
                    { id: "편의점", value: data[3] },
                    { id: "영화", value: data[4] },
                    { id: "엔터테인먼트", value: data[5] },
                    { id: "백화점", value: data[6] },
                    { id: "온라인쇼핑몰", value: data[7] },
                    { id: "간편결제", value: data[8] },
                    { id: "카페/베이커리", value: data[9] },
                    { id: "뷰티", value: data[10] },
                    { id: "외식", value: data[11] },
                    { id: "도서", value: data[12] },
                    { id: "테마파크", value: data[13] },
                    { id: "주유", value: data[14] }
                ]}


                margin={{ top: 40, bottom: 40, left: 50,  right: 50 }}

                innerRadius={0.6}

                padAngle={0}

                cornerRadius={10}

                sortByValue={true}

                animate={true}

                motionConfig={{
                    mass: 1,
                    tension: 1000,
                    friction: 1,
                    clamp: true,
                    precision: 0.01,
                    velocity: 0
                }}

                transitionMode={"startAngle"}

                colors={colors}

                borderWidth={3}
                borderColor={"rgb(255, 255, 255)"}

                arcLinkLabelsSkipAngle={20}
                arcLinkLabelsTextColor="rgb(0, 0, 0)"
                arcLinkLabelsStraightLength={36}
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: "color" }}
                arcLabelsSkipAngle={20}

                activeOuterRadiusOffset={20}

                theme={{
                    labels: {
                        text: {
                            fontSize: 18,
                            fontFamily: "Noto Sans KR",
                            fill: "rgb(100, 100, 100)"
                        },
                    },

                    legends: {
                        text: {
                            fontSize: 12,
                            fontFamily: "Noto Sans KR",
                            fill: "rgb(0, 0, 0)"
                        },
                    },
                }}
            />
        </div>
    );
};

export default PieChart;