import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Scream from '../components/scream/Scream';
import StaticProfile from '../components/profile/StaticProfile';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

//Card
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ScreamSkeleton from '../util/ScreamSkeleton';
import ProfileSkeleton from '../util/ProfileSkeleton';

import { connect } from 'react-redux';
import { getUserData } from '../redux/actions/dataActions';

class user extends Component {
    state = {
        profile: null,
        screamIdParam: null
    };
    componentDidMount() {
        const handle = this.props.match.params.handle;
        const screamId = this.props.match.params.screamId;

        if (screamId) this.setState({ screamIdParam: screamId });

        this.props.getUserData(handle);
        axios
            .get(`/user/${handle}`)
            .then((res) => {
                this.setState({
                    profile: res.data.user
                });
            })
            .catch((err) => console.log(err));
    }
    render() {
        const { screams, loading } = this.props.data;
        const { screamIdParam } = this.state;

        const screamsMarkup = loading ? (
            <ScreamSkeleton />
        ) : screams === null ? (
            <p>No screams from this user</p>
        ) : !screamIdParam ? (
            screams.map((scream) => <Scream key={scream.screamId} scream={scream} />)
        ) : (
                        screams.map((scream) => {
                            if (scream.screamId !== screamIdParam)
                                return <Scream key={scream.screamId} scream={scream} />;
                            else return <Scream key={scream.screamId} scream={scream} openDialog />;
                        })
                    );

        return (
            /*<Grid container spacing={16}>
              <Grid item sm={8} xs={12}>
                {screamsMarkup}
              </Grid>
              <Grid item sm={4} xs={12}>
                {this.state.profile === null ? (
                  <ProfileSkeleton />
                ) : (
                  <StaticProfile profile={this.state.profile} />
                )}
              </Grid>
            </Grid>*/
            <Grid container sapcing={3}>
                <Grid item xs={8}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Advertising
                        </Typography>
                                <Grid>
                                    {this.state.profile === null ? (
                                        <ProfileSkeleton />
                                    ) : (
                                            <StaticProfile profile={this.state.profile} />
                                        )}
                                </Grid>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                        <Link to="/nurseryInfo">Learn More</Link>
                    </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Overview Child
                        </Typography>
                                <Grid>
                                    {this.state.profile === null ? (
                                        <ProfileSkeleton />
                                    ) : (
                                            <StaticProfile profile={this.state.profile} />
                                        )}
                                </Grid>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                <Link to="/overviewChild">Learn More</Link>
                    </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>

        );
    }
}

user.propTypes = {
    getUserData: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    data: state.data
});

export default connect(
    mapStateToProps,
    { getUserData }
)(user);
