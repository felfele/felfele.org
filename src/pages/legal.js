import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import Layout from '../components/Layout';

class Volunteer extends React.Component {
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
                    title={`Volunteer | ${siteTitle}`}
                />
                <h1>Felfele Terms & Privacy Policy</h1>
                <p style={{
                        textAlign: 'left',
                    }}>
                    Felfele is designed to never collect or store any sensitive information.
                    User-generated content in Felfele cannot be accessed by us or other third
                    parties because it is always end-to-end encrypted, private, and secure.
                    Our Terms of Service and Privacy Policy are available below.
                    <br/><br/>
                    <ul style={{
                        textAlign: 'left',
                    }}>
                        <li><a href="#terms-of-service">Terms of Service</a></li>
                        <li><a href="#privacy-policy">Privacy Policy</a></li>
                    </ul>
                    <h2 id="terms-of-service">Terms of Service</h2>
                    The Felfele Foundation (“Felfele”) utilizes state-of-the-art security and
                    end-to-end encryption to provide private content sharing to users worldwide.
                    Felfele also allows its users to follow publicly available content using
                    RSS/Atom links. Felfele does not allow its users to create publicly available
                    content. You agree to our Terms of Service (“Terms”) by installing or using
                    our apps, services, or website (together, “Services”).
                    <h3>About our services</h3>
                    <b>Minimum Age.</b> You must be at least 13 years old to use our Services.
                    The minimum age to use our Services without parental approval may be higher
                    in your home country.
                    <br/>
                    <b>Privacy of user data.</b> Felfele does not sell, rent or monetize your
                    personal data or content in any way – ever.
                    <br/>
                    Please read our <a href="#privacy-policy">Privacy Policy</a> to understand
                    how we safeguard the information you provide when using our Services. For
                    the purpose of operating our Services, you agree to our data practices as
                    described in our Privacy Policy, as well as the transfer of your encrypted
                    information and metadata to Germany where we have or use facilities.
                    <br/>
                    <b>Software.</b> In order to enable new features and enhanced functionality,
                    you consent to downloading and installing updates to our Services.
                    <br/>
                    <b>Fees and Taxes.</b> You are responsible for data and mobile carrier fees
                    and taxes associated with the devices on which you use our Services.

                    <h3>Using Felfele</h3>
                    <b>Our Terms and Policies.</b> You must use our Services according to our
                    Terms and posted policies.
                    <br/>
                    <b>Legal and Acceptable Use.</b> You agree to use our Services only for
                    legal, authorized, and acceptable purposes. You will not use (or assist
                    others in using) our Services in ways that: (a) violate or infringe the
                    rights of Felfele, our users, or others, including privacy, publicity,
                    intellectual property, or other proprietary rights; (b) involve sending
                    illegal or impermissible communications.
                    <br/>
                    <b>Harm to Felfele.</b> You must not (or assist others to) access, use,
                    modify, distribute, transfer, or exploit our Services in unauthorized
                    manners, or in ways that harm Felfele, our Services, or systems. For example
                    you must not (a) gain or try to gain unauthorized access to our Services or
                    systems; (b) disrupt the integrity or performance of our Services; (c)
                    create accounts for our Services through unauthorized or automated means;
                    (d) collect information about our users in any unauthorized manner; or (e)
                    sell, rent, or charge for our Services.
                    <br/>
                    <b>Keeping Your Account Secure.</b> Felfele embraces privacy by design and
                    does not have the ability to access your messages. You are responsible for
                    keeping your device and your Felfele account safe and secure.
                    <br/>
                    <b>RSS/Atom links.</b> Our Services may allow you to access publicly
                    available content from third-party services through the use of RSS/Atom
                    links. When you use third-party services content, their terms and privacy
                    policies govern your use of this content.

                    <h3>Your Rights and License with Felfele</h3>
                    <b>Your Rights.</b> You own the information you submit through our Services.
                    <br/>
                    <b>Felfele’s Rights.</b> We own all copyrights, trademarks, domains, logos,
                    trade dress, trade secrets, patents, and other intellectual property rights
                    associated with our Services. You may not use our copyrights, trademarks,
                    domains, logos, trade dress, patents, and other intellectual property rights
                    unless you have our written permission. To report copyright, trademark, or
                    other intellectual property infringement, please contact&nbsp;
                    <a href="mailto:hello@felfele.org">hello@felfele.org</a>.
                    <br/>
                    <b>Felfele’s License to You.</b> Felfele grants you a limited, revocable,
                    non-exclusive, and non-transferable license to use our Services in accordance
                    with these Terms.

                    <h3>Disclaimers and Limitations</h3>
                    <b>Disclaimers.</b> YOU USE OUR SERVICES AT YOUR OWN RISK AND SUBJECT TO THE
                    FOLLOWING DISCLAIMERS. WE PROVIDE OUR SERVICES ON AN “AS IS” BASIS WITHOUT ANY
                    EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF
                    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, AND
                    FREEDOM FROM COMPUTER VIRUS OR OTHER HARMFUL CODE. FELFELE DOES NOT WARRANT THAT
                    ANY INFORMATION PROVIDED BY US IS ACCURATE, COMPLETE, OR USEFUL, THAT OUR
                    SERVICES WILL BE OPERATIONAL, ERROR-FREE, SECURE, OR SAFE, OR THAT OUR SERVICES
                    WILL FUNCTION WITHOUT DISRUPTIONS, DELAYS, OR IMPERFECTIONS. WE DO NOT CONTROL,
                    AND ARE NOT RESPONSIBLE FOR, CONTROLLING HOW OR WHEN OUR USERS USE OUR SERVICES.
                    WE ARE NOT RESPONSIBLE FOR THE ACTIONS OR INFORMATION (INCLUDING CONTENT) OF OUR
                    USERS OR OTHER THIRD PARTIES. YOU RELEASE US, AFFILIATES, DIRECTORS, OFFICERS,
                    EMPLOYEES, PARTNERS, AND AGENTS (TOGETHER, “FELFELE PARTIES”) FROM ANY CLAIM,
                    COMPLAINT, CAUSE OF ACTION, CONTROVERSY, OR DISPUTE (TOGETHER, “CLAIM”) AND
                    DAMAGES, KNOWN AND UNKNOWN, RELATING TO, ARISING OUT OF, OR IN ANY WAY CONNECTED
                    WITH ANY SUCH CLAIM YOU HAVE AGAINST ANY THIRD PARTIES.
                    <br/>
                    <br/>
                    <b>Limitation of liability.</b> THE FELFELE PARTIES WILL NOT BE LIABLE TO YOU
                    FOR ANY LOST PROFITS OR CONSEQUENTIAL, SPECIAL, PUNITIVE, INDIRECT, OR
                    INCIDENTAL DAMAGES RELATING TO, ARISING OUT OF, OR IN ANY WAY IN CONNECTION
                    WITH OUR TERMS, US, OR OUR SERVICES, EVEN IF THE FELFELE PARTIES HAVE BEEN
                    ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR AGGREGATE LIABILITY RELATING
                    TO, ARISING OUT OF, OR IN ANY WAY IN CONNECTION WITH OUR TERMS, US, OR OUR
                    SERVICES WILL NOT EXCEED ONE DOLLAR ($1). THE FOREGOING DISCLAIMER OF CERTAIN
                    DAMAGES AND LIMITATION OF LIABILITY WILL APPLY TO THE MAXIMUM EXTENT PERMITTED
                    BY APPLICABLE LAW. THE LAWS OF SOME STATES OR JURISDICTIONS MAY NOT ALLOW THE
                    EXCLUSION OR LIMITATION OF CERTAIN DAMAGES, SO SOME OR ALL OF THE EXCLUSIONS AND
                    LIMITATIONS SET FORTH ABOVE MAY NOT APPLY TO YOU. NOTWITHSTANDING ANYTHING TO
                    THE CONTRARY IN OUR TERMS, IN SUCH CASES, THE LIABILITY OF THE FELFELE PARTIES
                    WILL BE LIMITED TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW.
                    <br/>
                    <br/>
                    <b>Availability of Our Services.</b> Our Services may be interrupted, including
                    for maintenance, upgrades, or network or equipment failures. We may discontinue
                    some or all of our Services, including certain features and the support for certain
                    devices and platforms, at any time.

                    <h3>Resolving Disputes and Ending Terms</h3>
                    <b>Resolving disputes.</b> You agree to resolve any Claim you have with us relating
                    to or arising out of our Terms, us, or our Services exclusively in Estonia. You
                    also agree to submit to the personal jurisdiction of such courts for the purpose
                    of litigating all such disputes. The laws of Estonia govern our Terms, as well as
                    any disputes, whether in court or arbitration, which might arise between Felfele
                    and you, without regard to conflict of law provisions.
                    <br/>
                    <b>Ending these Terms.</b> You may end these Terms with Felfele at any time by
                    deleting Felfele from your device and discontinuing use of our Services. The
                    following provisions will survive termination of your relationship with Felfele:
                    “Licenses,” “Disclaimers,” “Limitation of Liability,” “Resolving dispute,”
                    “Availability” and “Ending these Terms,” and “General”.

                    <h3>General</h3>
                    Felfele may update the Terms from time to time. When we update our Terms, we will
                    update the “Last Modified” date associated with the updated Terms. Your continued
                    use of our Services confirms your acceptance of our updated Terms and supersedes
                    any prior Terms. You will comply with all applicable export control and trade
                    sanctions laws. Our Terms cover the entire agreement between you and Felfele
                    regarding our Services. If you do not agree with our Terms, you should stop using
                    our Services.
                    <br/>
                    If we fail to enforce any of our Terms, that does not mean we waive the right to
                    enforce them. If any provision of the Terms is deemed unlawful, void, or
                    unenforceable, that provision shall be deemed severable from our Terms and shall
                    not affect the enforceability of the remaining provisions. Our Services are not
                    intended for distribution to or use in any country where such distribution or use
                    would violate local law or would subject us to any regulations in another country.
                    We reserve the right to limit our Services in any country. If you have specific
                    questions about these Terms, please contact us at&nbsp;
                    <a href="mailto:hello@felfele.org">hello@felfele.org</a>.

                    <h2 id="privacy-policy">Privacy Policy</h2>
                    Felfele allows its users to follow publicly available content using RSS/Atom links
                    and utilizes state-of-the-art security and end-to-end encryption to provide private
                    content sharing to users worldwide (“Services”). Felfele does not allow its users
                    to create publicly available content. User-generated content is always encrypted, so
                    it can never be shared or viewed by anyone but yourself and the intended recipients.

                    <h3>Information you provide</h3>
                    <b>Account Information.</b> You register with a profile name and optionally add a
                    profile picture. This information is end-to-end encrypted.
                    <br/>
                    <b>User-generated content.</b> Felfele cannot decrypt or otherwise access the content
                    that you create and share through the use of our Services.
                    <br/>
                    Your personal information, your preferences, the content that is privately shared
                    with you and the content you generated are stored on your phone.
                    <br/>
                    <b>User Support.</b> If you contact Felfele Support, any personal data you may
                    share with us is kept only for the purposes of researching the issue and contacting
                    you about your case.
                    <br/>
                    <b>Managing your information.</b> You can manage your personal information through
                    the Felfele application. For example, you can update your profile information under
                    the Contact section in our application.

                    <h3>Information we may share</h3>
                    <b>Felfele may need to share your data:</b>
                    <ul>
                        <li>To meet any applicable law, regulation, legal process or enforceable
                            governmental request.</li>
                        <li>To enforce applicable Terms, including investigation of potential
                            violations.</li>
                        <li>To detect, prevent, or otherwise address fraud, security, or technical
                            issues.</li>
                        <li>To protect against harm to the rights, property, or safety of Felfele,
                            our users, or the public as required or permitted by law.</li>
                    </ul>

                    <h3>Updates</h3>
                    We will update this privacy policy as needed so that it is current, accurate, and as
                    clear as possible. Your continued use of our Services confirms your acceptance of our
                    updated Privacy Policy.

                    <h3>Terms</h3>
                    Please also read our <a href="#terms-of-service">Terms</a> which also governs the terms
                    of this Privacy Policy.

                    <h3>Contact Us</h3>
                    If you have questions about our Privacy Policy please contact us at&nbsp;
                    <a href="mailto:hello@felfele.org">hello@felfele.org</a>. Attn: Sihtasutus Felfele,
                    Harju maakond, Tallinn, Kesklinna linnaosa, Pärnu mnt 141-(Delta Plaza 13.k), 11314,
                    Estonia.

                    <br/>
                    <br/>
                    Effective as of August 26, 2019
                    <br/>
                    Updated August 26, 2019

                </p>
            </Layout>
        );
    }
}

export default Volunteer;

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
