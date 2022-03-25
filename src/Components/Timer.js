import React from 'react'
import { Foot, Redes, TimerCard, TimerC, Titulo, TextCard } from '../styles/Timer_css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Timer = () => {
    return (
        <div>

            <Titulo>
                We're launching soon
            </Titulo>
            <TimerC>
                <div>

                    <TimerCard>
                        08
                    </TimerCard>
                    <TextCard>Days</TextCard>
                </div>
                <div>

                    <TimerCard>
                        23
                    </TimerCard>
                    <TextCard>Hours</TextCard>
                </div>
                <div>

                    <TimerCard>
                        55
                    </TimerCard>
                    <TextCard>Minutes</TextCard>
                </div>
                <div>

                    <TimerCard>
                        08
                    </TimerCard>
                    <TextCard>Seconds</TextCard>
                </div>
            </TimerC>
            <Foot>
                <Redes>
                    <li>
                        <i class="bi bi-facebook"></i>
                    </li>
                    <li>
                        <i class="bi bi-youtube"></i>
                    </li>
                    <li>
                        <i class="bi bi-instagram"></i>
                    </li>
                </Redes>

            </Foot>

        </div>
    )
}
