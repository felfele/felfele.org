import React, { Fragment } from 'react';
import { TopPart } from '../components/TopPart';
import { BottomPart } from '../components/BottomPart';
import { Row } from '../components/Row';
import { SectionWithImageAndLink, SectionSeparator, Section } from '../components/Section';
import { Ruler } from '../components/Ruler';
import { Footer } from '../components/Footer';
import { UniversalLink } from '../components/Button';
import GithubIcon from '../assets/github.png';
import TwitterIcon from '../assets/twitter-bird.png';

import { bankingData, ethereumData } from '../data/donate';

const ContactSection = ({icon, text, link, label}) => (
    <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 260,
        alignItems: 'flex-start',
    }}>
        <img
            src={icon}
            style={{
                width: '40px',
                height: '40px',
                paddingBottom: 20,
            }}
        />
        <h3 style={{
            fontSize: 18,
            fontFamily: 'Nunito Sans',
            fontWeight: 'normal',
            marginBottom: 12,
        }}>
            {text}
        </h3>
        { link
            ? <UniversalLink link={link}>{label}</UniversalLink>
            : label
        }
    </div>
)

const DonateInfo = ({title, data}) => (
    <div>
        <h3 style={{
            fontFamily: 'Jost',
            fontSize: 27,
            marginBottom: 0,
        }}>
            {title}
        </h3>
        <br />
        {Object.keys(data).map(key => {
            if (data[key]) {
                return (
                    <p style={{
                        fontSize: 18,
                        margin: 0,
                        wordBreak: 'break-word',
                        paddingBottom: 10,
                    }}>
                        <b>{key}: </b>
                        <br/>
                        <r>{data[key]}</r>
                    </p>
                );
            }
        })}
    </div>
)

export const Donate = ({data}) => (
    <Fragment>
        <TopPart
            fluidImage={data.donateIllustration.childImageSharp.fluid}
            pageTitle='Donate'
            title='MAKE A DONATION'
            subTitle='We’ve been lucky enough to get this far with the help of a network of friends, and by investing our own resources. In other words, giving us money is good for your karma.'
        />
        <BottomPart>
            <Row>
                <DonateInfo
                    title='BANK TRANSFER'
                    data={bankingData}
                />
                <SectionSeparator/>
                <DonateInfo
                    title='ETHEREUM TRANSACTION'
                    data={ethereumData}
                />
            </Row>

            <Ruler />

            <Footer/>
        </BottomPart>
    </Fragment>
)

export default Donate;

export const query = graphql`
    query {
        donateIllustration: file(
            relativePath: { eq: "donate-illustration.png" },
            sourceInstanceName: { eq: "images" }
            ) {
            childImageSharp {
                fluid(maxWidth: 560, quality: 100) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
    }
`;
