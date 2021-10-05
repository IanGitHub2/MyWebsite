import React from "react";
import { getMergeSortAnimations, getQuickSortAnimations } from "./sortingAlgorithms";
import './sortingVisualizer.css'

const ANIMATION_SPEED_MS = 1;

const NUMBER_OF_ARRAY_BARS = 120;

const PRIMARY_COLOR = 'turquoise';

const SECONDARY_COLOR = 'red';

export default class sortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 200));
        }
        this.setState({array});
    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroungColor = color;
                    barTwoStyle.backgroungColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    quickSort() {
        const qucikAnimations = getQuickSortAnimations(this.state.array);
        for (let i = 0; i < qucikAnimations.length; i++) {
            const arrayBarsQ = document.getElementsByClassName('array-bar');
            const isColorChangeQ = i % 3 !== 2;
            if (isColorChangeQ) {
                const [barOneIdxQ, barTwoIdxQ] = qucikAnimations[i];
                const barOneStyleQ = arrayBarsQ[barOneIdxQ].style;
                const barTwoStyleQ = arrayBarsQ[barTwoIdxQ].style;
                const colorQ = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyleQ.backgroungColor = colorQ;
                    barTwoStyleQ.backgroungColor = colorQ;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdxQ, newHeightQ] = qucikAnimations[i];
                    const barOneStyleQ = arrayBarsQ[barOneIdxQ].style;
                    barOneStyleQ.height = `${newHeightQ}px`
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    heapSort() {

    }

    bubbleSort() {

    }

    testSortingAlgorithms() {
        for (let i = 0; i < 100; i++) {
            const array = [];
            const length = randomIntFromInterval(1, 1000);
            for (let i = 0; i < length; i++) {
                array.push(randomIntFromInterval(-1000, 1000));
            }
            const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
            const mergeSortArray = getMergeSortAnimations(array.slice());
            console.log(arraysAreEqual(javaScriptSortedArray, mergeSortArray));
        }
    }

    render() {
        const {array} = this.state;

        return (
            <div className='array_container'>
                {array.map((value, idx) => (
                    <div 
                        className='array-bar'
                        key={idx}
                        style={{
                            backgroundColor: PRIMARY_COLOR,
                            height: `${value}px`,
                        }}></div>
                ))}
                <div className='buttons-container'>
                    <button className='button' onClick={() => this.resetArray()}>New Array</button>
                    <button className='button' onClick={() => this.mergeSort()}>Merge Sort</button>
                    {/* <button className='button' onClick={() => this.quickSort()}>Quick Sort</button>
                    <button className='button' onClick={() => this.heapSort()}>Heap Sort</button>
                    <button className='button' onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    <button className='button' onClick={() => this.testSortingAlgorithms()}>Test Sorting alg</button> */}
                </div>
            </div>
        )
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) {
            return false
        }
    }
    return true;
}