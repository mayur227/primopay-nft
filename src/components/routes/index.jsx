import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Master from '../layouts/masterlayout/Master';
import routes from './routes';
import FullMaster from '../layouts/masterlayout/FullMaster';
import ErrorPage from '../view/ErrorPage';

const RoutePage = () => {
    // const isLogin = localStorage.getItem("customer_access_token") || false;
    return(
        <Router>
            <Routes>
                {
                    routes.map(({ path, auth, verify, ActiveMenuKey, component: Component }, key) => {
                        return (
                            auth === true && verify === true ?
                                <Route path="/" element={<Master ActiveMenuKey={ActiveMenuKey} ptitle={Component.props.title} />} key={key}>
                                    <Route exact path={path} element={Component} />
                                </Route>
                                :
                                verify === false ? 
                                    <Route path="/" element={<Master ActiveMenuKey={ActiveMenuKey} ptitle={Component.props.title} />} key={key}>
                                        <Route exact path={path} element={Component} />
                                    </Route>
                                    :
                                    <Route path="/" element={<FullMaster ActiveMenuKey={ActiveMenuKey} ptitle={Component.props.title} />} key={key}>
                                        <Route exact path={path} element={Component} />
                                    </Route>
                        )
                    })
                }
                <Route path="/" element={<FullMaster />}>
                    <Route exact path="*" element={<ErrorPage title="Error 404" />} />
                </Route>
                {/* {routes.map(({path, auth, verify, ActiveMenuKey, component: Component}, key) => {
                        return (
                            auth === true && verify === true?
                                <Route path="/" element={<Master ActiveMenuKey={ActiveMenuKey} ptitle={Component.props.title} />} key={key}>
                                    <Route exact path={path} element={Component} />
                                </Route>
                            :auth === true ?
                                <Route path="/" element={<Master ActiveMenuKey={ActiveMenuKey} ptitle={Component.props.title} />} key={key}>
                                    <Route exact path={path} element={Component} />
                                </Route>
                            :
                                <Route path="/" element={<AuthMaster ptitle={Component.props.title} />}  key={key} >
                                    <Route exact path={path} element={Component}/>
                                </Route>
                        )
                    })
                } */}

            </Routes>
        </Router>
    )
}
export default RoutePage;