import React from 'react';
import { Divider, DatePicker } from 'antd';
import Chart from "react-apexcharts";
import SideMenu from '../../common/userpanel/SideMenu';
import NoDataLoader from '../../common/NoDataLoader';

import Avatar from '../../../../assets/images/avatar.png';

const { RangePicker } = DatePicker;

const AnnualizedIncome = (props) => {

    const series= [
        {
          name: "",
          data: [12000, 20000, 8000, 16000, 5000, 1000, 7500]
        }
    ]
    const initOptions= {
        chart: {
            id: "basic-bar",
            foreColor: "#fff",
			zoom: {
				enabled: false
			},
			toolbar: {
				show: false,
			},
        },
        colors: ['#c8e8ea', '#c8e8ea', '#c8e8ea', '#c8e8ea', '#c8e8ea', '#c8e8ea', '#c8e8ea'],
        legend: {
            show: false
        },
        plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '28px',
				distributed: true,
				borderRadius: 12
			}
		},
		dataLabels: {
			enabled: false
		},
		title: {
			show: false,
		},
		grid: {
			show: true,
			position: 'back',
			borderColor: '#CBD5E0',
		},
		tooltip: {
            enabled: false,
			theme: "dark",
			style: {
				fontSize: '14px',
				fontFamily: 'ProximaNova-Semibold'
			},
		},
        fill:{
            opacityTo: 0.5,
        },
        xaxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'],
			labels: {
				style: {
					colors:'#AAAAAA',
					fontSize: '12px',
					fontFamily: 'ProximaNova-Semibold',
					cssClass: 'apexcharts-xaxis-label',
				},
			},
            crosshairs: {
                fill: {
                    type: "gradient",
                    gradient: {
                      colorFrom: "#D8E3F0",
                      colorTo: "#BED1E6",
                      stops: [0, 100],
                      opacityFrom: 0.4,
                      opacityTo: 0.5
                    }
                  }
            },
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
		},
		yaxis: {
			labels: {
				style: {
					colors:'#AAAAAA',
					fontSize: '12px',
					fontFamily: 'ProximaNova-Semibold',
					cssClass: 'apexcharts-yaxis-label',
				},
			},
		}
    }

    const options = initOptions;

    return (
        <>
            <div className="usercenter-wrapper">
                <div className="container">
                    <div className="usercenter-page-title">
                        <h4>{props.title}</h4>
                    </div>
                    <div className="sidebar-layout-page pb80">
                        <SideMenu />
                        <div className="sidebar-content">
                            <div className='sidebar-content-view'>
                                <div className="income-title-part">
                                    <h2 className='me-2'>1,634,685 ETH</h2>
                                    <div className="income-chart-date">
                                        <div className="datepicker-group rangepicker-style-1 order-rangePicker">
                                            <RangePicker 
                                                className="input-control" 
                                                format={"YYYY-MM"} 
                                                separator={<i className="ri-subtract-line"></i>} 
                                                clearIcon={<i className="ri-close-fill"></i>} 
                                                getPopupContainer={node => node.parentNode} 
                                                suffixIcon={<i className="ri-arrow-down-s-fill text-primary-color"></i>} 
                                                bordered={false}
                                                picker="month"
                                                placeholder={['Start Month', 'End Month']}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="income-chart-part">
                                    <div className='row align-items-center'>
                                        <div className='col-md-8'>
                                            <div className="income-chart">
                                                <Chart options={options} series={series} type="bar" width={'100%'} />
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className="income-chart-right text-center">
                                                <div className="income-chart-right-info">
                                                    <p><span className='text-primary-color font-semibold'>15,152</span> JPY</p>
                                                    <p>Previous month total</p>
                                                </div>
                                                <div className="income-chart-right-info">
                                                    <p><span className='text-primary-color font-semibold'>65,152</span> JPY</p>
                                                    <p>Last 12 months total</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <Divider className='mt-4' />
                                <div className='position-relative'>
                                    <div className='page-sub-heading px-0 pt-0'>
                                        <h2>Mar 2021</h2>
                                    </div>
                                    <div className='history-rightBtn'>
                                        <div className='table-margin-mins'>
                                            <div className="table-responsive custom-scrollbar">
                                                <table className="table nft-tableui text-nowrap">
                                                    <thead>
                                                        <tr>
                                                            <th>From</th>
                                                            <th>Amount</th>
                                                            <th>Date</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className='avatar-media'>
                                                                    <div className='avatar-media-img'>
                                                                        <img src={Avatar} className="img-fluid me-3" alt="" />
                                                                    </div>
                                                                    <h6>Jane Cooper</h6>
                                                                </div>
                                                            </td>
                                                            <td>123.12 ETH</td>
                                                            <td>Dec 30, 2019 05:18</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className='avatar-media'>
                                                                    <div className='avatar-media-img'>
                                                                        <img src={Avatar} className="img-fluid me-3" alt="" />
                                                                    </div>
                                                                    <h6>Jenny Wilson</h6>
                                                                </div>
                                                            </td>
                                                            <td>123.12 ETH</td>
                                                            <td>Dec 30, 2019 05:18</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className='avatar-media'>
                                                                    <div className='avatar-media-img'>
                                                                        <img src={Avatar} className="img-fluid me-3" alt="" />
                                                                    </div>
                                                                    <h6>Guy Hawkins</h6>
                                                                </div>
                                                            </td>
                                                            <td>123.12 ETH</td>
                                                            <td>Dec 30, 2019 05:18</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className='avatar-media'>
                                                                    <div className='avatar-media-img'>
                                                                        <img src={Avatar} className="img-fluid me-3" alt="" />
                                                                    </div>
                                                                    <h6>Jacob Jones</h6>
                                                                </div>
                                                            </td>
                                                            <td>123.12 ETH</td>
                                                            <td>Dec 30, 2019 05:18</td>
                                                        </tr>
                                                        {/* <tr>
                                                            <td colSpan="4">
                                                                <div className="no-data-found text-center">
                                                                    <NoDataLoader />
                                                                    <p>No Data Found</p>
                                                                </div>
                                                            </td>
                                                        </tr> */}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AnnualizedIncome;
