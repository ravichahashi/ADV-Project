import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <div>
                <nav class="gtco-nav" role="navigation">
                    <div class="gtco-container">

                        <div class="row">
                            <div class="col-sm-4 col-xs-2">
                                <div id="gtco-logo"><a href="index.html">Sunerry <em>.</em></a></div>
                            </div>
                            <div class="row-xs-2 text-middle menu-1">
                                <ul>
                                    <li class="active"><a class="drop" href="#">Children</a>
                                        <ul>
                                            <li><a href="pages/gallery.html">My Children</a></li>
                                            <li><a href="pages/full-width.html">ผลการประเมิน</a></li>
                                            <li><a href="pages/sidebar-left.html">จัดอันดับ</a></li>
                                        </ul>
                                    </li>
                                    <li class="active"><a class="drop" href="#">Nursery</a>
                                        <ul>
                                            <li><a href="pages/gallery.html">My Nursery</a></li>
                                            <li><a href="pages/sidebar-left.html">Favorite</a></li>
                                        </ul>
                                    </li>
                                    <li class="active"><a href="#">Inbox</a></li>
                                    <li class="btn-cta"><a href="#"><span>Account</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        )
    }
}
