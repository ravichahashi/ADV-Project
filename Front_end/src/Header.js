import React, { Component } from 'react'

export default class Hearder extends Component {
    render() {
        return (
            <div>
                <nav class="gtco-nav" role="navigation">
		<div class="gtco-container">
			
			<div class="row">
				<div class="col-sm-4 col-xs-12">
					<div id="gtco-logo"><a href="index.html">Sunerry <em>.</em></a></div>
				</div>
				<div class="col-xs-8 text-right menu-1">
					<ul>
                        <li class="btn-cta"><a href="#"><span>Sign-in</span></a></li>
						<li class="btn-cta"><a href="#"><span>Sign-up</span></a></li>
					</ul>	
				</div>
			</div>
		</div>
	</nav>
            </div>

        )
    }
}
