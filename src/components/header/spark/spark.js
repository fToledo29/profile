import React, { useCallback, useEffect, useState } from 'react';
import Keyframes from '@keyframes/core';


const Spark = ({sparkClass, line, delayedTime}) => {

        const random = useCallback((max, min) => Math.floor(Math.random() * (max - min + 1) + min), []);;

        const getRandom = useCallback(() => random(10000, 1000), [random]);

        const [animation, setAnimation] = useState('');

        const [cssFrame, setCSSFrame] = useState('');

        const getCSSFrame = useCallback((sparkClass) => {

		return Keyframes.playCSS({
                        name: `move-${sparkClass}`,
                        duration: `${random(2, 4)}s`,
                        timingFunction: 'ease-out',
                        delay: '0s',
                        iterationCount: 1,
                        direction: 'normal',
		});

	}, [random]);

        const setCSSFrames = useCallback((topStart, leftStart, leftEnd, topEnd, sparkClass, sparkEle) => {
                const isSupported = Keyframes.isSupported();

                let sparkframe = ''; 

                let forward = random(1000000, 2);

                if (isSupported) { 


                        sparkEle.style.left = leftStart;

                        sparkEle.style.top = topStart

                        sparkEle.className = sparkClass;

                        sparkframe = forward % 2 === 0 ? Keyframes.defineCSS([{
                                name: `move-${sparkClass}`,
                                '0%':   {
                                        opacity: 0,
                                },
                                '50%':  {
                                        top: `${topStart}px`, 
                                        left: `${leftStart}px`,
                                        opacity: 1,
                                },
                                '100%': {
                                        top: `${topEnd}px`,
                                        left: `${leftEnd}px`,
                                        opacity: 0,
                                }
                        }]) : Keyframes.defineCSS([{
                                name: `move-${sparkClass}`,
                                '0%':   {
                                        opacity: 0,
                                },
                                '50%':  {
                                        top: `${topEnd}px`,
                                        left: `${leftEnd}px`,
                                        opacity: 1,
                                },
                                '100%': {
                                        top: `${topStart}px`, 
                                        left: `${leftStart}px`,
                                        opacity: 0,
                                }
                        }]);
                }

                return sparkframe;
        }, [random]);

        const setVerticalLine = useCallback((topStart, leftStart, leftEnd, topEnd, sparkClass, sparkEle, verticalLine) => {
                
                const randomNum = getRandom();

                /// ****** Vertical lines ****** ///
                // Left
                sparkEle.style.left = leftStart;

                // top 1
                sparkEle.style.top = topStart;

                // Set Spark Class
                sparkEle.className = sparkClass;

                setTimeout(() => {
                        // Top 2
                        sparkEle.style.top = topEnd;
                }, randomNum);

        }, [getRandom]);

        const setOrizontalLine = useCallback((topStart, leftStart, leftEnd, topEnd, sparkClass, sparkEle, verticalLine) => {

                const inerRandomTime1 = getRandom();

                sparkEle.style.left = leftStart;

                sparkEle.style.top = topStart

                sparkEle.className = sparkClass;

                setTimeout(() => {
                        
                        sparkEle.style.left = leftEnd;

                }, inerRandomTime1);

        }, [getRandom]);


        
        useEffect(() => {
                const startSparking = () => {

                        const randomTime = getRandom();

                        setTimeout(() => {

                                const x1Int = parseInt(line.getAttribute('x1'), 10);
                                const yInt = parseInt(line.getBBox().y, 10);
                                const sparkState1Class =  'spark-state1_' + x1Int.toString() + yInt.toString();
                                const sparkEle = document.querySelector('.' + sparkClass);
                                const topStart = line.getBoundingClientRect().top;
                                const leftStart = line.getBoundingClientRect().left;
                                const leftEnd = line.getBoundingClientRect().right;
                                const topEnd = line.getBoundingClientRect().bottom;

                                if (!sparkEle) {
                                        return;
                                }

                                if (line.getBBox().height > 0) {

                                        const randomTime = getRandom();

                                        setTimeout(() => {

                                                const cssFrame = getCSSFrame(sparkState1Class);

                                                setCSSFrame(cssFrame);

                                                const sparkframe = setCSSFrames(topStart, leftStart, leftStart, topEnd, sparkState1Class, sparkEle);

                                                setAnimation(sparkframe);

                                        }, randomTime);

                                } else if (sparkEle) {

                                        const randomTime = getRandom();

                                        setTimeout(() => {

                                                const cssFrame = getCSSFrame(sparkState1Class);

                                                setCSSFrame(cssFrame);
                                                
                                                const sparkframe = setCSSFrames(topStart, leftStart, leftEnd, topStart, sparkState1Class, sparkEle);

                                                setAnimation(sparkframe);

                                        }, randomTime);
                                }

                                

                        }, randomTime);
                }

                setTimeout(() => {

                        if (line.getAttribute('stroke-width') === '6') {
                                console.log(line);
                                startSparking();
                        }
                
                }, delayedTime);


        }, [line, setVerticalLine, getRandom, sparkClass, setOrizontalLine, getCSSFrame, setCSSFrames, delayedTime]);

        return (<div>
                        <style>
                                {animation}
                        </style>
                        <div className={sparkClass} style={{
                                animation: cssFrame
                        }} ></div>
                </div>);
}

export default Spark;