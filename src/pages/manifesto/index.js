import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import Layout from '../../components/Layout';
import { Row } from 'react-flexbox-grid';

class Manifesto extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title');
        const siteDescription = get(
            this,
            'props.data.site.siteMetadata.description'
        );

        return (
            <Layout>
                <Helmet
                    htmlAttributes={{ lang: 'en' }}
                    meta={[{ name: 'description', content: siteDescription }]}
                    title={`Manifesto | ${siteTitle}`}
                />
                <Row around='xs'>
                    <div>
                        <h2>Decentralized Application Manifesto</h2>
                        <br /><br />
                        <b>Privacy</b>
                        <br /><br />
                        Internet technology made connecting people all around the world easy and cheap. Companies are able to create applications and services that are easy-to-use and sometimes they give it away for free. On the other hand they collect a lot of private and personal information about everyone to operate their business and realise profit of it. This led to a state of constant global surveillance that slowly became the norm.
                        However with recent technological advancements it becomes possible to build similar applications that follows a different philosophy and are safe from this mass-surveillance. We are able to build services that gives you a similar level of privacy when you are with your friends and family in person.
                        <br /><br />
                        <b>Economy</b>
                        <br /><br />
                        Also we believe that your relationship with your closest friends and family is not something that you or someone else should make profit of. Ten or fifteen years ago it was not feasible to ask money from online social applications, because the per-user cost of a global service would have been too high to allow everyone to use it, hence it would have been a blocker for the growth of these services. The most successful services came up with a business model that promised the illusion of free usage. It had a hidden price though, because these services monetised your personal informations by repackaging it and selling to advertisers.
                        A sizeable amount of cost of these services come from paying for the storage capacity and network bandwidth to hold and transfer your posts, photos and videos. Another big part of the cost is to employ engineers to develop and maintain the systems that makes these global scale operations possible.
                        Fortunately the price of storage capacity and network bandwidth is getting cheaper exponentially but the amount of user generated data that needs to be stored is not growing exponentially anymore. This fact and the availability of novel decentralised technologies that can provide the necessary infrastructure with proper accounting for the services will enable new kind of applications where the cost will be marginal and it will be so easy to pay for it, that nobody will think about it anymore.
                        <br /><br />
                        <b>Control</b>
                        <br /><br />
                        When you sign up for using a centralised service and trust a company with your data, you make a bet that the company will keep your data safe as long as you need it, don’t allow unauthorised third-parties access to it but it will allow you to access it of course. Unfortunately this is often not the case. Companies (especially startups) tend to be sold and shut down, thus losing your data. Sometimes they change management or business model and force you to sign new, less desirable conditions by keeping your data hostage. Sometimes they are forced by nation states and powerful corporations to remove your content in the name of censorship and copyright laws. Sometimes accidents happen and they just leak or lose your data.
                        We think that it’s a mistake to trust all your data to a single company, no matter how much you trust them now. Therefore we are working on technologies where it’s possible to build a network of trustless services that are incentivised to work together to keep and serve tiny pieces of encrypted information that represents your data scattered across the internet. With that nobody can access, or stop you from accessing your data, not even us.
                        <br /><br />
                        <b>Summary</b>
                        <br /><br />
                        The need for human communication is constant and technology enabled us to build tools to serve this need. Historically this evolved to practices that takes away our rights to privacy and control, because that was the only economic way to build these tools in a global scale. Fortunately there are better ways to achieve this now, which respect your privacy and let you stay in control. We commit to working towards this future by making new technologies and services available at a price that’s affordable for everyone.
                        <br /><br />

                        [1] For a long time it was always someone else who paid these costs. In the early ages of the Internet it was the government who sponsored the infrastructure costs for the military and academic research. Later on it was corporations who subsidized the costs, so that they can eliminate friction and get a lot of people onboard quickly, usually funded by private investors. This meant that there were always someone who had more control than you had and the system wasn’t transparent. We want to introduce a new system, where you pay all your costs and you can know the price of everything, so you can keep the control.

                    </div>
                </Row>
            </Layout>
        );
    }
}

export default Manifesto;

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`;
