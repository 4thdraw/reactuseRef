import React, { useEffect, useRef, useState } from "react";
import "./interview.css";

const Preinterview = () => {
    let shownum = 0;
    const precont = [
        {
            h3: "비전공자로써 프론트앤드 훈련에서 가장 어려웠던 것은?",
            div: " 변수 선언부터 함수선언/실행 같은 개념이 너무 생소했다.자바스크립트가 완전하지 않은 상태에서 /리액트를 들어가니 출발점을 잡기 너무 어려웠다"
        },
        {
            h3: "리액트 프로젝트와 웹 프로젝트의 차이점을 이해하고 클라이언트의 요구에 효율적인 선택을 할 수 있나요?",
            div: " 변수 선언부터 함수선언/실행 같은 개념이 너무 생소했다.자바스크립트가 완전하지 않은 상태에서 /리액트를 들어가니 출발점을 잡기 너무 어려웠다"
        },
        {
            h3: "비전공자로써 프론트앤드 훈련에서 가장 어려웠던 것은?",
            div: " 변수 선언부터 함수선언/실행 같은 개념이 너무 생소했다.자바스크립트가 완전하지 않은 상태에서 /리액트를 들어가니 출발점을 잡기 너무 어려웠다"
        },
        {
            h3: "비전공자로써 프론트앤드 훈련에서 가장 어려웠던 것은?",
            div: " 변수 선언부터 함수선언/실행 같은 개념이 너무 생소했다.자바스크립트가 완전하지 않은 상태에서 /리액트를 들어가니 출발점을 잡기 너무 어려웠다"
        },
    ]
    useEffect(() => {
        document.querySelectorAll("#faq li")[0].classList = "act";
        setInterval(() => {
            shownum++;
            shownum %= precont.length;
            document.querySelectorAll("#faq li").forEach((tag, num) => {
                if (num == shownum) {
                    tag.classList = "act"

                } else {
                    tag.classList = ""
                }
            })
        }, 2000)
    }, [])
    return (
        <section id="faq">
            <h2>면접전에 봐주세요.</h2>
            <ul>
                {
                    precont.map((e, i) => {
                        return (
                            <li key={i}>
                                <h3  >{e.h3}</h3>
                                <div >
                                    {
                                        e.div.split('/').map((v, ii) => {
                                            return <React.Fragment key={ii}>
                                                {v}
                                                <br></br>
                                            </React.Fragment>
                                        })
                                    }
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </section>
    )
}

export default Preinterview;