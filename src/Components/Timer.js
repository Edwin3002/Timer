import React from 'react'
import { Foot, Redes, TimerCard, TimerC, Titulo, TextCard, Card } from '../styles/Timer_css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Timer = ({timerD, timerH, timerM, timerS}) => {
    
    return (
        <div>

            <Titulo>
                We're launching soon
            </Titulo>   
            <TimerC>
                <Card>

                    <TimerCard>
                        {timerD}
                    </TimerCard>
                    <TextCard>Days</TextCard>
                </Card>
                <Card >

                    <TimerCard>
                    {timerH}

                    </TimerCard>
                    <TextCard>Hours</TextCard>
                </Card>
                <Card >

                    <TimerCard>
                    {timerM}

                    </TimerCard>
                    <TextCard>Minutes</TextCard>
                </Card>
                <Card>

                    <TimerCard className='seconds'>
                    {timerS}
                    </TimerCard>
                    <TextCard>Seconds</TextCard>
                </Card>
            </TimerC>
            <Foot>
                <Redes>
                    <li>
                        <i className="bi bi-facebook"></i>
                    </li>
                    <li>
                        <i className="bi bi-youtube" ></i>
                    </li>
                    <li>
                        <i className="bi bi-instagram"></i>
                    </li>
                </Redes>

            </Foot>

        </div>
    )
}
