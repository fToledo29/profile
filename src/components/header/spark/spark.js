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
                        duration: `${random(2, 5)}s`,
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


                        sparkEle.style.left = `${leftStart}px`;

                        sparkEle.style.top = `${topStart}px`;

                        sparkEle.className = sparkClass;

                        sparkframe = forward % 2 === 0 ? Keyframes.defineCSS([{
                                name: `move-${sparkClass}`,
                                '0%':   {
                                        opacity: 0,
                                        top: `${topStart}px`, 
                                        left: `${leftStart}px`,
                                },
                                '50%':  {
                                        opacity: 1,
                                        filter: 'brightness(1.2)',
                                        // backgroundColor: '#fff',
	                                // boxShadow: '0 0 37px 32px #fff, 0 0 100px 38px #0a56ff, 0 0 118px 79px #7490e2',
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
                                        top: `${topEnd}px`,
                                        left: `${leftEnd}px`,
                                },
                                '50%':  {
                                        opacity: 1,
                                        filter: 'brightness(1.2)',
                                        // backgroundColor: '#fff',
	                                // boxShadow: '0 0 37px 32px #fff, 0 0 100px 38px #0a56ff, 0 0 118px 79px #7490e2',
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
        
        useEffect(() => {
                const startSparking = () => {

                        const x1Int = parseInt(parseInt(line.getBoundingClientRect().x), 10);
                        const yInt = parseInt(parseInt(line.getBoundingClientRect().y), 10);
                        const dInt = parseInt(line.getCTM().d, 10);
                        const eInt = parseInt(line.getCTM().e, 10);
                        const sparkState1Class =  'spark-state1_' + x1Int.toString() + yInt.toString() + dInt.toString() + eInt.toString();
                        const sparkEle = document.querySelector('.' + sparkClass);
                        const topStart = line.getBoundingClientRect().top;
                        const leftStart = line.getBoundingClientRect().left;
                        const leftEnd = line.getBoundingClientRect().right;
                        const topEnd = line.getBoundingClientRect().bottom;

                        console.log('Spark Element: ', sparkEle);

                        if (!sparkEle) {
                                return;
                        }

                        line.classList.add(`lineOf-${sparkState1Class}`);

                        if (sparkEle && line.getBoundingClientRect().height > 30) {

                                const cssFrame = getCSSFrame(sparkState1Class);

                                setCSSFrame(cssFrame);

                                const sparkframe = setCSSFrames(topStart, leftStart, leftStart, topEnd, sparkState1Class, sparkEle);

                                setAnimation(sparkframe);

                        } else if (sparkEle && line.getBoundingClientRect().width > 35) {

                                const cssFrame = getCSSFrame(sparkState1Class);

                                setCSSFrame(cssFrame);
                                
                                const sparkframe = setCSSFrames(topStart, leftStart, leftEnd, topStart, sparkState1Class, sparkEle);

                                setAnimation(sparkframe);

                        }

                }

                setTimeout(() => {
                        console.log(line);
                        startSparking();
                }, delayedTime);


        }, [line, getRandom, sparkClass, getCSSFrame, setCSSFrames, delayedTime]);

        return (<div>
                        <style>
                                {animation}
                        </style>
                        <div className={sparkClass} style={{
                                animation: cssFrame
                        }}></div>
                </div>);
}

export default Spark;