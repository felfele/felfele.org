import React, { Fragment } from 'react';

import { TopPart } from '../components/TopPart';
import { BottomPart } from '../components/BottomPart';
import { Row } from '../components/Row';
import { SectionWithImageAndLink, SectionSeparator } from '../components/Section';
import { UniversalLink } from '../components/Button';
import { Ruler } from '../components/Ruler'
import { CONTENT_MAX_WIDTH } from '../data/style'

import GithubIcon from '../assets/github.png';
import TwitterIcon from '../assets/twitter.svg';
import SlackIcon from '../assets/slack.svg';
import MailboxIcon from '../assets/mailbox.svg';

import FelfeleLogo from '../assets/images/felfele-icon.svg'
import { Illustration } from '../components/Illustration';

const ContactSection = ({icon, text, link, label}) => (
    <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        maxWidth: (CONTENT_MAX_WIDTH - 40) / 2,
    }}>
        <img
            src={icon}
            style={{
                width: '40px',
                height: '40px',
                paddingBottom: 10,
            }}
        />
        <h3 style={{
            fontSize: 18,
            fontFamily: 'Nunito Sans',
            fontWeight: 'normal',
            marginBottom: 12,
            minHeight: 40,
        }}>
            {text}
        </h3>
        { link
            ? <UniversalLink
                link={link}
                style={{
                    fontFamily: 'Jost',
                    fontWeight: 500,
                    fontSize: 14,
                }}
            >{label}</UniversalLink>
            : label
        }
    </div>
)

export const About = ({}) => (
    <Fragment>
        <TopPart
            icon={<Illustration src={FelfeleLogo} style={{maxWidth: 300}} className='about-logo-image' />}
            pageTitle='About'
            subTitle='We are a nonprofit foundation ran by a small, independent, and distributed team defending privacy and freedom of expression.'
        />
        <BottomPart>
            <Row>
                <SectionWithImageAndLink
                    title='CONTACT US'
                    text='Idea? Feedback? Something weird?… we’re all ears. Don’t be shy, drop us a line.'
                    link='mailto:hello@felfele.org'
                    label='HELLO@FELFELE.ORG'
                />
                <SectionSeparator/>
                <SectionWithImageAndLink
                    title='CONTRIBUTE'
                    text='We share our work openly, so that anyone can benefit and help make things better.'
                    link='/lab'
                    label='CHECK FELFELE LAB'
                />
                <SectionSeparator/>
                <SectionWithImageAndLink
                    title='FEELING GENEROUS?'
                    text='If you like what we do and you can afford to help, you can offer us a coffee (or two).'
                    link='/donate'
                    label='MAKE A DONATION'
                />
            </Row>

            <Ruler/>

            <Row>
                <ContactSection
                    icon={GithubIcon}
                    text='We share work that may interest developers on Github.'
                    link='https://github.com/felfele'
                    label='https://github.com/felfele'
                />
                <SectionSeparator/>
                <ContactSection
                    icon={SlackIcon}
                    text='We use Slack on a daily basis, you can have a look there.'
                    link='https://join.slack.com/t/felfele/shared_invite/zt-clseo486-L~kgODYDt1HKPUfmlAuxrA'
                    label='Join our workspace'
                />
                <SectionSeparator/>
                <ContactSection
                    icon={TwitterIcon}
                    text='You can find us on Twitter if you are into that.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                    link='https://twitter.com/FelfeleOrg'
                    label='@FelfeleOrg'
                />
                <SectionSeparator/>
                <ContactSection
                    icon={MailboxIcon}
                    text='Official letters or postcards can be sent to our legal address:'
                    label={
                        <p style={{
                            padding: 0,
                            margin: 0,
                            marginBlockStart: 0,
                            fontFamily: 'Jost',
                            fontWeight: 500,
                            fontSize: 14,
                        }}>
                            Felfele SA
                            <br/>
                            Pärnu mnt 141 (Delta Plaza 13.k)
                            <br/>
                            11314 Tallinn, Estonia
                        </p>
                    }
                />
            </Row>
        </BottomPart>
    </Fragment>
)

export default About;
