import React,{ useEffect} from 'react';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, sidebar, ThemeSettings } from './componenets';
import './App.css'
import LineChart from './componenets/Charts/LineChart';
import Stacked from './componenets/Charts/Stacked';

const App = () => {
    const activeMenu = false;
  return (
    <div>
        <Router>
            <div className='flex relative dark:bg-main-dark-bg'>
                <div className='fixed right-4 bottom-4' style={{ zIndex: '1000'}}>
                    <TooltipComponent content="Settings" position='Top'>
                        <button type='button' 
                                className='text-3xl p-3 hover:drop-shadow-xl hover: bg-light-gray text-white'
                                style={{ background: 'blue', borderRadius: '50%'}}         
                        >
                            <FiSettings/>
                        </button>
                    </TooltipComponent>
                </div>
                {activeMenu ? (
                    <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                        Sidebar
                    </div>
                ) : (
                    <div className='w-0 dark: bg-secondary-dark-bg'>
                        Sidebar w-0
                    </div>
                )}
                <div className={
                    `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? ' md:ml-72' : 'flex-2'}`
                }>
                    <div className='fixed md:static bg-main-bg  dark:bg-main-dark-bg navbar w-full'>
                        Navbar
                     </div>

                </div>
                <div>
                    <Routes>
                        {/* Dashboard */}

                        <Route path='/' element="E-Commerce"/>
                        <Route path='/ecommerce' element="E-Commerce"/>

                        {/* Pages */}
                        <Route path='/orders' element=""/>
                        <Route path='/employees' element=""/>
                        <Route path='/customers' element=""/>

                        {/* Apps */}
                        <Route path='/calendar' element=""/>
                        <Route path='/karban' element=""/>
                        <Route path='/Editor' element=""/>
                        <Route path='/color-picker' element=""/>

                        {/* Charts */}
                        <Route path='/line' element={<LineChart/>}/>
                        <Route path='/area' element=""/>
                        <Route path='/bar' element=""/>
                        <Route path='/pie' element=""/>
                        <Route path='/financial' element=""/>
                        <Route path='/color-mapping' element=""/>
                        <Route path='/pyramid' element=""/>
                        <Route path='/stacked' element={<Stacked/>}/>



                    </Routes>
                </div>
            </div>
        </Router>
    </div>
  )
}

export default App