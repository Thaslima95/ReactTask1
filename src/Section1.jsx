import React from 'react'
import img2 from './img2.jpg';
import { Download } from '@styled-icons/fa-solid/Download';
import { PhoneVolume } from 'styled-icons/fa-solid';



export default function Section1() {
  return (
    <div>
         <section class="section1">
        <div class="left1">
            <div class="subleft">
                <h1>
                    M.R.DAVIS
                </h1>
                <hr/>
                <p>Browsing Html Template </p>
                <a href="#" id='btn' class="btnsend"><Download size="20"/> Download Cv </a>
                <a href="#" id='btn' class="btnsend"> <PhoneVolume size="20"/> Contact Me </a>
            </div>
        </div>
        <div class="right1">
            <img class="image" src={img2} alt=""/>
        </div>
    </section>
    </div>
  )
}
