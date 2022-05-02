import React from 'react'
import Header from '../../../components/header/header'
import '../../../components/header/header.css'
import './result.css'
function Result() {
    return (
        <>
            <div>
            </div>
            <div className='section1'>
                <div className='inner'>
                    <div class="hsw_inputBox tripTypeWrapper">
                        <label for="tripType" class="lbl_input latoBold font12 blueText appendBottom5"> TRIP TYPE</label>
                        <div class="selectDropdown make_relative">
                            <span class="downArrow"></span>
                            <div class="multiDropDownVal">One Way</div>
                        </div>
                    </div>


                </div>
                <div class="hsw_inputBox width160">
                    <span for="fromCity" class="lbl_input latoBold font12 blueText appendBottom5">
                        FROM
                    </span>
                    <input id="fromCity" type="text" class="hsw_inputField font16 whiteText textOverflow" readonly="" value="New Delhi, India" />
                </div>
                <div>
                    <div class="swap-icon marR8">
                    </div>
                </div>
                <div class="hsw_inputBox width160">
                    <span for="toCity" class="lbl_input latoBold font12 blueText appendBottom5">TO </span>
                    <input id="toCity" type="text" class="hsw_inputField font16 whiteText textOverflow" readonly="" value="Bengaluru, India" />
                </div>
                <div class="hsw_inputBox width160">
                    <span for="departure" class="lbl_input latoBold font12 blueText appendBottom5"> DEPART </span>
                    <input id="departure" type="text" class="hsw_inputField font16 whiteText textOverflow" title="Mon, May 2, 2022" readonly="" value="Mon, May 2, 2022" />
                </div>
                <div class="hsw_inputBox width160">
                    <span for="return" class="lbl_input latoBold font12 blueText appendBottom5"> RETURN </span>
                    <span class="clearRetDate"></span>
                    <input id="return" type="text" class="hsw_inputField font16 whiteText textOverflow" title="" placeholder="Select Return" readonly="" value="" />
                </div>
                <div class="hsw_inputBox">
                    <span for="travellerAndClass" class="lbl_input latoBold font12 blueText appendBottom5">PASSENGERS &amp; CLASS</span>
                    <input id="travellerAndClass" type="text" class="hsw_inputField guests font16 whiteText textOverflow" readonly="" value="1 Adult, Economy" />
                </div>




            </div>
        </>
    )
}

export default Result