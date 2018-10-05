import React, { Component } from 'react'
import './subnavs.css'
export default class subnav extends Component {
  render() {
    return (
      <div>
        <div className={false?"global-header microsite-header megamenu--open--style":"global-header microsite-header"} role="Header"> 
            <div className="row wrapper"> 
                <div className="megamenu-trigger" title="MENU" data-target="micrositemenu" style={{position: 'absolute'}}> 
                <a className="megamenu-trigger__link menu-ada" aria-expanded="false" href="#" id="triggerMenu"> 
                    <svg className="icon icon-menu megamenu-trigger__icon microsite-trigger__icon" role="img" style={{display: 'inline-block'}}> 
                    <title>Menu</title> 
                    <use xlinkHref="/static/images/icons-metlife.svg#icon-menu" /> 
                    </svg> 
                    <svg className="icon icon-close megamenu-trigger__icon microsite-trigger__icon--close" id="closeSvg" role="img" style={{display: 'none'}}> 
                    <title>Close</title> 
                    <use xlinkHref="/static/images/icons-metlife.svg#icon-close" /> 
                    </svg> </a> 
                </div> 
                <div className="microsite-header__logos"> 
                <h1 className="microsite-header__logos__img"> <a href="/voluntary-benefits/" id="voluntary-benefits_header_page-logoLinkMetLife" target="_self"> <img src="/voluntary-benefits/_jcr_content/logo-metlife/image.asset.spool/metlife_logo.png" alt="MetLife Logo" /> </a> </h1> 
                </div> 
            </div> 
            <div className="clearfix" /> 
        </div>
        <div className="subnavigaton subnavigation category-subnav traversed base parbase micro-subnav xk-traversed-list xk-component xk-section-base" data-xk-section="v1">  
            <div className="container microsite-subnav" role="navigation" aria-label="Home"> 
                <nav className="row subnav subnav--microsite" data-srnewpagetext="Open in a new window" data-srsamepagetext="Open in the same window"> 
                <ul className="subnav__list"> 
                    <li className="subnav__list__item"> <a href="/voluntary-benefits/" className="subnav__list__item__anchor active" tabIndex={0} title style={{minHeight: 60}}> <p className="subnav__list__item__anchor__label"> 
                        <svg className="icon icon-homepage" role="img"> 
                            <use xlinkHref="/static/images/icons-metlife.svg#icon-homepage" /> 
                        </svg> Voluntary Benefits Home </p> <span className="sr-only">Open in the same window</span></a> </li> 
                    <li className="subnav__list__item"> <a href="/voluntary-benefits/meaningful-conversations/" className="subnav__list__item__anchor" target="_self" title="Navigation Menu Start " id="voluntary-benefits_subnavigaton_list-pages1" tabIndex={0} style={{minHeight: 60}}> <p className="subnav__list__item__anchor__label"> Meaningful Conversations </p> <span className="sr-only">Open in the same window</span></a> </li> 
                    <li className="subnav__list__item"> <a href="/voluntary-benefits/peoplelikeme/" className="subnav__list__item__anchor" target="_self" title id="voluntary-benefits_subnavigaton_list-pages2" tabIndex={0} style={{minHeight: 60}}> <p className="subnav__list__item__anchor__label"> People Like Me </p> <span className="sr-only">Open in the same window</span></a> </li> 
                    <li className="subnav__list__item"> <a href="/voluntary-benefits/custom-coverage-overview/" className="subnav__list__item__anchor" target="_self" title="Navigation Menu End" id="voluntary-benefits_subnavigaton_list-pages3" tabIndex={0} style={{minHeight: 60}}> <p className="subnav__list__item__anchor__label"> Benefits Overview </p> <span className="sr-only">Open in the same window</span></a> </li> 
                </ul> 
                </nav> 
            </div> 
        </div>

      </div>
    )
  }
}
