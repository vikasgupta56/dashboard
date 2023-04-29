import React, { useEffect, useState } from 'react'
import { BsGraphUp } from 'react-icons/bs';
import { BsGraphDown } from 'react-icons/bs';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Admin = () => {

    const [load, setLoad] = useState(false)
    useEffect(() => {
        setLoad(true)
    }, [])

    const settings = {
        series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109,100]
        }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
        }],
        options: {
            chart: {
                // height: 350,
                // width:600,
                width: '100%',
                type: 'area'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'datetime',
                categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        }
    }

    const settings2 = {

        series: [{
            name: 'Inflation',
            data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
        }],
        options: {
            chart: {
                height: 350,
                type: 'bar',
            },
            plotOptions: {
                bar: {
                    borderRadius: 10,
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val + "%";
                },
                offsetY: -20,
                style: {
                    fontSize: '12px',
                    colors: ["#304758"]
                }
            },

            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                position: 'top',
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                crosshairs: {
                    fill: {
                        type: 'gradient',
                        gradient: {
                            colorFrom: '#D8E3F0',
                            colorTo: '#BED1E6',
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                }
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                    formatter: function (val) {
                        return val + "%";
                    }
                }

            },
            // title: {
            //     text: 'Monthly Inflation in Argentina, 2002',
            //     floating: true,
            //     offsetY: 0,
            //     align: 'center',
            //     style: {
            //         color: '#444'
            //     }
            // }
        }
    }
    return (
        <>
            <div className="admin">

                <div className="admin-left">
                    <div className="admin-left-logo">
                        <div className="rss-logo">RSS PARTY</div>
                    </div>
                    <div className="admin-nav-item admin-nav-active">Dashboard</div>
                    <div className="admin-nav-item">Analytics</div>
                    <div className="admin-nav-item">Wings</div>
                    <div className="admin-nav-item">Graphs</div>
                    <div className="admin-nav-item">Analytics</div>
                    <div className="admin-nav-item">Analytics</div>
                    <div className="admin-nav-item">Analytics</div>
                    <div className="admin-nav-item">Analytics</div>
                    <div className="admin-nav-item">Analytics</div>
                    <div className="admin-nav-item">Analytics</div>
                    <div className="admin-nav-item">Analytics</div>
                    <div className="admin-nav-item">Analytics</div>
                    <div className="admin-nav-item">Analytics</div>
                    <div className="admin-nav-item">Analytics</div>
                    <div className="admin-nav-item">Analytics</div>
                    <div className="admin-nav-item">Analytics</div>
                    <div className="admin-nav-item">Analytics</div>

                </div>
                <div className="admin-right">
                    <div className="admin-top-nav">
                        <div className="admin-top-nav-left">
                            <div className="admin-ham"></div>
                        </div>
                        <div className="admin-top-nav-right flex-all">
                            <div className="admin-profile">
                                <img src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" />
                            </div>
                            <div className="admin-name">Hi, Narendra Modi</div>
                        </div>
                    </div>
                    <div className="admin-section-cont">
                        <div className="admin-section">
                            <div className="admin-section-name">Dashboard</div>
                            <div className="admin-box-cont">
                                <div className="admin-box">
                                    <h3>Total Page views</h3>
                                    <div className="box-no-cont">
                                        <div className="box-no">3,45,10</div>
                                        <div className="box-box"><BsGraphUp /> 35.5%</div>
                                    </div>
                                    <p>You made an extra 3000 this year</p>
                                </div>
                                <div className="admin-box">
                                    <h3>Total Users</h3>
                                    <div className="box-no-cont">
                                        <div className="box-no">3,45,10</div>
                                        <div className="box-box down-box"><BsGraphDown /> -35.5%</div>
                                    </div>
                                    <p>You made 3000 less this year</p>
                                </div> <div className="admin-box">
                                    <h3>Total Orders</h3>
                                    <div className="box-no-cont">
                                        <div className="box-no">3,45,10</div>
                                        <div className="box-box"><BsGraphUp /> 35.5%</div>
                                    </div>
                                    <p>You made an extra 3000 this year</p>
                                </div> <div className="admin-box">
                                    <h3>Total Sales</h3>
                                    <div className="box-no-cont">
                                        <div className="box-no">3,45,10</div>
                                        <div className="box-box"><BsGraphUp /> 35.5%</div>
                                    </div>
                                    <p>You made an extra 3000 this year</p>
                                </div>
                            </div>
                        </div>
                        <div className="admin-section wa">
                            <div className="wa-left">
                                <div className="admin-section-name">Unique visitors</div>
                                <div className="spline-chart-cont">
                                    <Chart options={settings.options} series={settings.series} type="area" height={"100%"} width={"100%"}/>
                                </div>
                            </div>
                            <div className="wa-right">
                                <div className="admin-section-name">Contribution Analytics</div>
                                <div className="bar-chart-cont">
                                    <Chart options={settings2.options} series={settings2.series} type="bar" height={"100%"} width={"100%"} />
                                </div>


                            </div>
                        </div>
                        <div className="admin-section th">
                            <div className="th-left">
                                <div className="th-top">
                                    <div className="th-top-left">Latest Transactions</div>
                                    <div className="th-top-right">View All</div>
                                </div>
                                <div className="th-cont">
                                    <div className="th-div">
                                        <div className="th-time">3 days ago</div>
                                        <div className="th-pic-cont">
                                            <div className="th-pic"></div>
                                        </div>
                                        <div className="th-msg-cont">
                                            <h3>+ 300 Rs from Vikas</h3>
                                            <p>This is some dummy text</p>
                                        </div>
                                    </div>
                                    <div className="th-div">
                                        <div className="th-time">3 days ago</div>
                                        <div className="th-pic-cont">
                                            <div className="th-pic"></div>
                                        </div>
                                        <div className="th-msg-cont">
                                            <h3>+ 300 Rs from Vikas</h3>
                                            <p>This is some dummy text</p>
                                        </div>
                                    </div> <div className="th-div">
                                        <div className="th-time">3 days ago</div>
                                        <div className="th-pic-cont">
                                            <div className="th-pic"></div>
                                        </div>
                                        <div className="th-msg-cont">
                                            <h3>+ 300 Rs from Vikas</h3>
                                            <p>This is some dummy text</p>
                                        </div>
                                    </div> <div className="th-div">
                                        <div className="th-time">3 days ago</div>
                                        <div className="th-pic-cont">
                                            <div className="th-pic"></div>
                                        </div>
                                        <div className="th-msg-cont">
                                            <h3>+ 300 Rs from Vikas</h3>
                                            <p>This is some dummy text</p>
                                        </div>
                                    </div> <div className="th-div">
                                        <div className="th-time">3 days ago</div>
                                        <div className="th-pic-cont">
                                            <div className="th-pic"></div>
                                        </div>
                                        <div className="th-msg-cont">
                                            <h3>+ 300 Rs from Vikas</h3>
                                            <p>This is some dummy text</p>
                                        </div>
                                    </div> <div className="th-div">
                                        <div className="th-time">3 days ago</div>
                                        <div className="th-pic-cont">
                                            <div className="th-pic"></div>
                                        </div>
                                        <div className="th-msg-cont">
                                            <h3>+ 300 Rs from Vikas</h3>
                                            <p>This is some dummy text</p>
                                        </div>
                                    </div> <div className="th-div">
                                        <div className="th-time">3 days ago</div>
                                        <div className="th-pic-cont">
                                            <div className="th-pic"></div>
                                        </div>
                                        <div className="th-msg-cont">
                                            <h3>+ 300 Rs from Vikas</h3>
                                            <p>This is some dummy text</p>
                                        </div>
                                    </div> <div className="th-div">
                                        <div className="th-time">3 days ago</div>
                                        <div className="th-pic-cont">
                                            <div className="th-pic"></div>
                                        </div>
                                        <div className="th-msg-cont">
                                            <h3>+ 300 Rs from Vikas</h3>
                                            <p>This is some dummy text</p>
                                        </div>
                                    </div> <div className="th-div">
                                        <div className="th-time">3 days ago</div>
                                        <div className="th-pic-cont">
                                            <div className="th-pic"></div>
                                        </div>
                                        <div className="th-msg-cont">
                                            <h3>+ 300 Rs from Vikas ugv yg uyg uyg uyg uyg ihig iugh i iug iu ihi </h3>
                                            <p>This is some dummy text</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="th-right">
                                <div className="th-top">
                                    <div className="th-top-left">Traffic Sources</div>
                                </div>
                                <div className="source-cont">
                                        <div className="source">
                                            <div className="source-name">Social
                                                <div className="source-perc">36%</div></div>
                                            <div className="source-bar"></div>
                                        </div>
                                        <div className="source">
                                            <div className="source-name">Social
                                                <div className="source-perc">36%</div></div>
                                            <div className="source-bar">
                                                <div className="top-bar"></div>
                                            </div>
                                        </div>  <div className="source">
                                            <div className="source-name">Social
                                                <div className="source-perc">36%</div></div>
                                            <div className="source-bar"></div>
                                        </div>  <div className="source">
                                            <div className="source-name">Social
                                                <div className="source-perc">36%</div></div>
                                            <div className="source-bar"></div>
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

export default Admin