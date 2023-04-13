import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/provider'
import theme from '@/styles/theme'
import { Box, Heading, Text, VStack } from '@chakra-ui/layout'
import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'

// Components
import NavBar from '@/comps/navbar'
import Product from '@/comps/product'
import Hero from '@/comps/homeHero'
import Footer from '@/comps/footer'

export default function Terms() {

	const { toggleColorMode } = useColorMode();
  	const text = useColorModeValue('dark', 'light');

	React.useEffect(() => {

		setTimeout(() => {
			if (text === 'dark') {
				console.log('dark')
				// set the color mode to dark
				toggleColorMode()
			}
		}, 2000)
	}, [])
	

  return (
    <ChakraProvider theme={theme}>
		<Head>
			<title>hansumfella | ToS</title>
			<meta name="description" content="he's so hansum" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="images/hansum-circle.png" />

			{/* //   <!-- Facebook Meta Tags --> */}
			<meta property="og:url" content="https://hansumfella.com" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content="hansumfella" />
			<meta property="og:description" content="he's so hansum" />
			<meta property="og:image" content="images/hansum-circle.png" />

			{/* <!-- Twitter Meta Tags --> */}
			<meta name="twitter:card" content="summary_small_image" />
			<meta property="twitter:domain" content="hansumfella.com" />
			<meta property="twitter:url" content="https://hansumfella.com" />
			<meta name="twitter:title" content="hansumfella" />
			<meta name="twitter:description" content="he's so hansum" />
			<meta name="twitter:image" content="images/hansum-circle.png" />
		</Head>

		<Box>
			<NavBar />
			<Box
				display={'flex'}
				flexDirection={'column'}
			>

				<Box
					display={'flex'}
					flexDirection={'column'}
					justifyContent={'center'}
					w={'100vw'}
                    mt={'2rem'}
                    p={'5rem'}
				>
                    <Heading fontSize={'5xl'} textAlign={'center'}>Privacy Policy</Heading>
                    <br />
                    <p>This Privacy Policy describes how hansumfellas-shop.myshopify.com (the “Site” or “we”) collects, uses, and discloses your Personal Information when you visit or make a purchase from the Site.</p>
                    <Heading fontSize={"3xl"}>Contact</Heading>
                    <p>After reviewing this policy, if you have additional questions, want more information about our privacy practices, or would like to make a complaint, please contact us by e-mail at hansumfella@gmail.com or by mail using the details provided below:</p>
                    <br></br>
                    <Heading fontSize={"3xl"}>Collecting Personal Information</Heading>
                    <p>When you visit the Site, we collect certain information about your device, your interaction with the Site, and information necessary to process your purchases. We may also collect additional information if you contact us for customer support. In this Privacy Policy, we refer to any information about an identifiable individual (including the information below) as “Personal Information”. See the list below for more information about what Personal Information we collect and why.</p>
                    <ul>
                    <li><u>Device information</u></li>
                    <ul>
                    <li><Heading fontSize={"2xl"}>Purpose of collection:</Heading> to load the Site accurately for you, and to perform analytics on Site usage to optimize our Site.</li>
                    <li><Heading fontSize={"2xl"}>Source of collection:</Heading> Collected automatically when you access our Site using cookies, log files, web beacons, tags, or pixels <i>[ADD OR SUBTRACT ANY OTHER TRACKING TECHNOLOGIES USED]</i>.</li>
                    <li><Heading fontSize={"2xl"}>Disclosure for a business purpose:</Heading> shared with our processor Shopify <i>[ADD ANY OTHER VENDORS WITH WHOM YOU SHARE THIS INFORMATION]</i>.</li>
                    <li><Heading fontSize={"2xl"}>Personal Information collected:</Heading> version of web browser, IP address, time zone, cookie information, what sites or products you view, search terms, and how you interact with the Site <i>[ADD OR SUBTRACT ANY OTHER PERSONAL INFORMATION COLLECTED]</i>.</li>
                    </ul>
                    <li><u>Order information</u></li>
                    <ul>
                    <li><Heading fontSize={"3xl"}>Purpose of collection:</Heading> to provide products or services to you to fulfill our contract, to process your payment information, arrange for shipping, and provide you with invoices and/or order confirmations, communicate with you, screen our orders for potential risk or fraud, and when in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
                    <li><Heading fontSize={"3xl"}>Source of collection:</Heading> collected from you.</li>
                    <li><Heading fontSize={"3xl"}>Disclosure for a business purpose:</Heading> shared with our processor Shopify <i>[ADD ANY OTHER VENDORS WITH WHOM YOU SHARE THIS INFORMATION. FOR EXAMPLE, SALES CHANNELS, PAYMENT GATEWAYS, SHIPPING AND FULFILLMENT APPS]</i>.</li>
                    <li><Heading fontSize={"3xl"}>Personal Information collected:</Heading> name, billing address, shipping address, payment information (including credit card numbers <i>[INSERT ANY OTHER PAYMENT TYPES ACCEPTED]</i>), email address, and phone number.</li>
                    </ul>
                    <li><u>Customer support information</u></li>
                    <ul>
                    <li><Heading fontSize={"3xl"}>Purpose of collection:</Heading></li>
                    <li><Heading fontSize={"3xl"}>Source of collection:</Heading></li>
                    <li><Heading fontSize={"3xl"}>Disclosure for a business purpose:</Heading></li>
                    <li><Heading fontSize={"3xl"}>Personal Information collected:</Heading> <i>[INSERT ANY OTHER INFORMATION YOU COLLECT: OFFLINE DATA, PURCHASED MARKETING DATA/LISTS]</i></li>
                    <li><Heading fontSize={"3xl"}>Purpose of collection:</Heading> to provide customer support.</li>
                    <li><Heading fontSize={"3xl"}>Source of collection:</Heading> collected from you</li>
                    <li><Heading fontSize={"3xl"}>Disclosure for a business purpose:</Heading> <i>[ADD ANY VENDORS USED TO PROVIDE CUSTOMER SUPPORT]</i></li>
                    <li><Heading fontSize={"3xl"}>Personal Information collected:</Heading> <i>[ADD ANY MODIFICATIONS TO THE INFORMATION LISTED ABOVE OR ADDITIONAL INFORMATION AS NEED.]</i></li>
                    </ul>
                    </ul>
                    <p><i>[INSERT FOLLOWING SECTION IF AGE RESTRICTION IS REQUIRED]</i></p>
                    <h2>Minors</h2>
                    <p>The Site is not intended for individuals under the age of <i>[INSERT AGE]</i>. We do not intentionally collect Personal Information from children. If you are the parent or guardian and believe your child has provided us with Personal Information, please contact us at the address above to request deletion.</p>
                    <Heading fontSize={"3xl"}>Sharing Personal Information</Heading>
                    <p>We share your Personal Information with service providers to help us provide our services and fulfill our contracts with you, as described above. For example:</p>
                    <ul>
                    <li>We use Shopify to power our online store. You can read more about how Shopify uses your Personal Information here: <a href="https://www.shopify.com/legal/privacy" target="_blank">https://www.shopify.com/legal/privacy</a>.</li>
                    <li>We may share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</li>
                    <li><i>[INSERT INFORMATION ABOUT OTHER SERVICE PROVIDERS]</i></li>
                    </ul>
                    <p><i>[INCLUDE FOLLOWING SECTION IF USING REMARKETING OR TARGETED ADVERTISING]</i></p>
                    <Heading fontSize={"3xl"}>Behavioural Advertising</Heading>
                    <p>As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For example:</p>
                    <ul>
                    <li><i>[INSERT IF APPLICABLE]</i> We use Google Analytics to help us understand how our customers use the Site. You can read more about how Google uses your Personal Information here: <a href="https://www.google.com/intl/en/policies/privacy/" target="_blank">https://www.google.com/intl/en/policies/privacy/</a>. You can also opt-out of Google Analytics here: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank">https://tools.google.com/dlpage/gaoptout</a>.</li>
                    <li><i>[INSERT IF YOU USE A THIRD PARTY MARKETING APP THAT COLLECTS INFORMATION ABOUT BUYER ACTIVITY ON YOUR SITE]</i> We share information about your use of the Site, your purchases, and your interaction with our ads on other websites with our advertising partners. We collect and share some of this information directly with our advertising partners, and in some cases through the use of cookies or other similar technologies (which you may consent to, depending on your location).</li>
                    <li><i>[INSERT IF USING SHOPIFY AUDIENCES]</i> We use Shopify Audiences to help us show ads on other websites with our advertising partners to buyers who made purchases with other Shopify merchants and who may also be interested in what we have to offer. We also share information about your use of the Site, your purchases, and the email address associated with your purchases with Shopify Audiences, through which other Shopify merchants may make offers you may be interested in.</li>
                    <li><i>[INSERT OTHER ADVERTISING SERVICES USED]</i></li>
                    </ul>
                    <p>For more information about how targeted advertising works, you can visit the Network Advertising Initiative’s (“NAI”) educational page at <a href="https://www.networkadvertising.org/understanding-online-advertising/how-does-it-work" target="_blank">https://www.networkadvertising.org/understanding-online-advertising/how-does-it-work</a>.</p>
                    <p>You can opt out of targeted advertising by:</p>
                    <p><i>[INCLUDE OPT-OUT LINKS FROM WHICHEVER SERVICES BEING USED. COMMON LINKS INCLUDE:</i></p>
                    <i> </i><i>
                    <li>FACEBOOK - <a href="https://www.facebook.com/settings/?tab=ads" target="_blank">https://www.facebook.com/settings/?tab=ads</a></li>
                    <li>GOOGLE - <a href="https://www.google.com/settings/ads/anonymous" target="_blank">https://www.google.com/settings/ads/anonymous</a></li>
                    </i>
                    <ul>
                    <li><i>BING - <a href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads" target="_blank">https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads</a>]</i></li>
                    </ul>
                    <p>Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance’s opt-out portal at: <a href="https://optout.aboutads.info/" target="_blank">https://optout.aboutads.info/</a>.</p>
                    <Heading fontSize={"3xl"}>Using Personal Information</Heading>
                    <p>We use your personal Information to provide our services to you, which includes: offering products for sale, processing payments, shipping and fulfillment of your order, and keeping you up to date on new products, services, and offers.</p>
                    <p><i>[INCLUDE THE FOLLOWING SECTION IF YOUR STORE IS LOCATED IN OR IF YOU HAVE CUSTOMERS IN EUROPE]</i></p>
                    <h2>Lawful basis</h2>
                    <p>Pursuant to the General Data Protection Regulation (“GDPR”), if you are a resident of the European Economic Area (“EEA”), we process your personal information under the following lawful bases:</p>
                    <p><i>[INCLUDE ALL THAT APPLY TO YOUR BUSINESS]</i></p>
                    <ul>
                    <li>Your consent;</li>
                    <li>The performance of the contract between you and the Site;</li>
                    <li>Compliance with our legal obligations;</li>
                    <li>To protect your vital interests;</li>
                    <li>To perform a task carried out in the public interest;</li>
                    <li>For our legitimate interests, which do not override your fundamental rights and freedoms.</li>
                    </ul>
                    <h2>Retention</h2>
                    <p>When you place an order through the Site, we will retain your Personal Information for our records unless and until you ask us to erase this information. For more information on your right of erasure, please see the ‘Your rights’ section below.</p>
                    <h2>Automatic decision-making</h2>
                    <p>If you are a resident of the EEA, you have the right to object to processing based solely on automated decision-making (which includes profiling), when that decision-making has a legal effect on you or otherwise significantly affects you.</p>
                    <p>We <i>[DO/DO NOT]</i> engage in fully automated decision-making that has a legal or otherwise significant effect using customer data.</p>
                    <p>Our processor Shopify uses limited automated decision-making to prevent fraud that does not have a legal or otherwise significant effect on you.</p>
                    <p>Services that include elements of automated decision-making include:</p>
                    <ul>
                    <li>Temporary blacklist of IP addresses associated with repeated failed transactions. This blacklist persists for a small number of hours.</li>
                    <li>Temporary blacklist of credit cards associated with blacklisted IP addresses. This blacklist persists for a small number of days.</li>
                    </ul>
                    <Heading fontSize={"3xl"}>Selling Personal Information</Heading>
                    <p><i>[INCLUDE THIS SECTION IF YOUR BUSINESS IS SUBJECT TO THE CALIFORNIA CONSUMER PRIVACY ACT AND SELLS PERSONAL INFORMATION AS DEFINED BY THE CALIFORNIA CONSUMER PRIVACY ACT]</i></p>
                    <p>Our Site sells Personal Information, as defined by the California Consumer Privacy Act of 2018 (“CCPA”).</p>
                    <p><i>[Insert:</i></p>
                    <ul>
                    <li><i>categories of information sold;</i></li>
                    <li><i>IF USING SHOPIFY AUDIENCES: information about your use of the Site, your purchases, and the email address associated with your purchase</i></li>
                    <li><i>instructions on how to opt-out of sale;</i></li>
                    <li><i>whether your business sells information of minors (under 16) and whether you obtain affirmative authorization;</i></li>
                    <li><i>if you provide a financial incentive to sell information, provide information about what that incentive is.]</i></li>
                    </ul>
                    <p>&nbsp;<br/></p>
                    <Heading fontSize={"3xl"}>Your rights</Heading>
                    <p><i>[INCLUDE FOLLOWING SECTION IF YOUR STORE IS LOCATED IN OR IF YOU HAVE CUSTOMERS IN EUROPE]</i></p>
                    <h2>GDPR</h2>
                    <p>If you are a resident of the EEA, you have the right to access the Personal Information we hold about you, to port it to a new service, and to ask that your Personal Information be corrected, updated, or erased. If you would like to exercise these rights, please contact us through the contact information above. <i>[OR INSERT ALTERNATIVE INSTRUCTIONS FOR SENDING ACCESS, ERASURE, CORRECTION, AND PORTABILITY REQUESTS]</i></p>
                    <p>Your Personal Information will be initially processed in Ireland and then will be transferred outside of Europe for storage and further processing, including to Canada and the United States. For more information on how data transfers comply with the GDPR, see Shopify’s GDPR Whitepaper: <a href="https://help.shopify.com/en/manual/your-account/privacy/GDPR" target="_blank">https://help.shopify.com/en/manual/your-account/privacy/GDPR</a>.</p>
                    <p><i>[INCLUDE FOLLOWING SECTION IF YOUR BUSINESS IS SUBJECT TO THE CALIFORNIA CONSUMER PRIVACY ACT]</i></p>
                    <h2>CCPA</h2>
                    <p>If you are a resident of California, you have the right to access the Personal Information we hold about you (also known as the ‘Right to Know’), to port it to a new service, and to ask that your Personal Information be corrected, updated, or erased. If you would like to exercise these rights, please contact us through the contact information above. <i>[OR INSERT ALTERNATIVE INSTRUCTIONS FOR SENDING ACCESS, ERASURE, CORRECTION, AND PORTABILITY REQUESTS]</i></p>
                    <p>If you would like to designate an authorized agent to submit these requests on your behalf, please contact us at the address above.</p>
                    <Heading fontSize={"3xl"}>Cookies</Heading>
                    <p>A cookie is a small amount of information that’s downloaded to your computer or device when you visit our Site. We use a number of different cookies, including functional, performance, advertising, and social media or content cookies. Cookies make your browsing experience better by allowing the website to remember your actions and preferences (such as login and region selection). This means you don’t have to re-enter this information each time you return to the site or browse from one page to another. Cookies also provide information on how people use the website, for instance whether it’s their first time visiting or if they are a frequent visitor.</p>
                    <p>We use the following cookies to optimize your experience on our Site and to provide our services.</p>
                    <p><i>[Be sure to check this list against Shopify’s current list of cookies on the merchant storefront: <a href="https://www.shopify.com/legal/cookies" target="_blank">https://www.shopify.com/legal/cookies</a> ]</i></p>
                    <h2>Cookies Necessary for the Functioning of the Store</h2>
                    <table>
                    <thead>
                    <tr>
                    <th><Heading fontSize={"3xl"}>Name</Heading></th>
                    <th><Heading fontSize={"3xl"}>Function</Heading></th>
                    <th><Heading fontSize={"3xl"}>Duration</Heading></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td>_ab</td>
                    <td>Used in connection with access to admin.</td>
                    <td>2y</td>
                    </tr>
                    <tr>
                    <td>_secure_session_id</td>
                    <td>Used in connection with navigation through a storefront.</td>
                    <td>24h</td>
                    </tr>
                    <tr>
                    <td>_shopify_country</td>
                    <td>Used in connection with checkout.</td>
                    <td>session</td>
                    </tr>
                    <tr>
                    <td>_shopify_m</td>
                    <td>Used for managing customer privacy settings.</td>
                    <td>1y</td>
                    </tr>
                    <tr>
                    <td>_shopify_tm</td>
                    <td>Used for managing customer privacy settings.</td>
                    <td>30min</td>
                    </tr>
                    <tr>
                    <td>_shopify_tw</td>
                    <td>Used for managing customer privacy settings.</td>
                    <td>2w</td>
                    </tr>
                    <tr>
                    <td>_storefront_u</td>
                    <td>Used to facilitate updating customer account information.</td>
                    <td>1min</td>
                    </tr>
                    <tr>
                    <td>_tracking_consent</td>
                    <td>Tracking preferences.</td>
                    <td>1y</td>
                    </tr>
                    <tr>
                    <td>c</td>
                    <td>Used in connection with checkout.</td>
                    <td>1y</td>
                    </tr>
                    <tr>
                    <td>cart</td>
                    <td>Used in connection with shopping cart.</td>
                    <td>2w</td>
                    </tr>
                    <tr>
                    <td>cart_currency</td>
                    <td>Used in connection with shopping cart.</td>
                    <td>2w</td>
                    </tr>
                    <tr>
                    <td>cart_sig</td>
                    <td>Used in connection with checkout.</td>
                    <td>2w</td>
                    </tr>
                    <tr>
                    <td>cart_ts</td>
                    <td>Used in connection with checkout.</td>
                    <td>2w</td>
                    </tr>
                    <tr>
                    <td>cart_ver</td>
                    <td>Used in connection with shopping cart.</td>
                    <td>2w</td>
                    </tr>
                    <tr>
                    <td>checkout</td>
                    <td>Used in connection with checkout.</td>
                    <td>4w</td>
                    </tr>
                    <tr>
                    <td>checkout_token</td>
                    <td>Used in connection with checkout.</td>
                    <td>1y</td>
                    </tr>
                    <tr>
                    <td>dynamic_checkout_shown_on_cart</td>
                    <td>Used in connection with checkout.</td>
                    <td>30min</td>
                    </tr>
                    <tr>
                    <td>hide_shopify_pay_for_checkout</td>
                    <td>Used in connection with checkout.</td>
                    <td>session</td>
                    </tr>
                    <tr>
                    <td>keep_alive</td>
                    <td>Used in connection with buyer localization.</td>
                    <td>2w</td>
                    </tr>
                    <tr>
                    <td>master_device_id</td>
                    <td>Used in connection with merchant login.</td>
                    <td>2y</td>
                    </tr>
                    <tr>
                    <td>previous_step</td>
                    <td>Used in connection with checkout.</td>
                    <td>1y</td>
                    </tr>
                    <tr>
                    <td>remember_me</td>
                    <td>Used in connection with checkout.</td>
                    <td>1y</td>
                    </tr>
                    <tr>
                    <td>secure_customer_sig</td>
                    <td>Used in connection with customer login.</td>
                    <td>20y</td>
                    </tr>
                    <tr>
                    <td>shopify_pay</td>
                    <td>Used in connection with checkout.</td>
                    <td>1y</td>
                    </tr>
                    <tr>
                    <td>shopify_pay_redirect</td>
                    <td>Used in connection with checkout.</td>
                    <td>30 minutes, 3w or 1y depending on value</td>
                    </tr>
                    <tr>
                    <td>storefront_digest</td>
                    <td>Used in connection with customer login.</td>
                    <td>2y</td>
                    </tr>
                    <tr>
                    <td>tracked_start_checkout</td>
                    <td>Used in connection with checkout.</td>
                    <td>1y</td>
                    </tr>
                    <tr>
                    <td>checkout_one_experiment</td>
                    <td>Used in connection with checkout.</td>
                    <td>session</td>
                    </tr>
                    <tr>
                    <td>checkout_session_lookup</td>
                    <td>Used in connection with checkout.</td>
                    <td>3w</td>
                    </tr>
                    <tr>
                    <td>checkout_session_token_&lt;&lt;token&gt;&gt;</td>
                    <td>Used in connection with checkout.</td>
                    <td>3w</td>
                    </tr>
                    <tr>
                    <td>identity-state</td>
                    <td>Used in connection with customer authentication.</td>
                    <td>24h</td>
                    </tr>
                    <tr>
                    <td>identity-state-&lt;&lt;token&gt;&gt;</td>
                    <td>Used in connection with customer authentication.</td>
                    <td>24h</td>
                    </tr>
                    <tr>
                    <td>identity_customer_account_number</td>
                    <td>Used in connection with customer authentication.</td>
                    <td>12w</td>
                    </tr>
                    </tbody>
                    </table>
                    <h2>Reporting and Analytics</h2>
                    <table>
                    <thead>
                    <tr>
                    <th><Heading fontSize={"3xl"}>Name</Heading></th>
                    <th><Heading fontSize={"3xl"}>Function</Heading></th>
                    <th><Heading fontSize={"3xl"}>Duration</Heading></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td>_landing_page</td>
                    <td>Track landing pages.</td>
                    <td>2w</td>
                    </tr>
                    <tr>
                    <td>_orig_referrer</td>
                    <td>Track landing pages.</td>
                    <td>2w</td>
                    </tr>
                    <tr>
                    <td>_s</td>
                    <td>Shopify analytics.</td>
                    <td>30min</td>
                    </tr>
                    <tr>
                    <td>_shopify_d</td>
                    <td>Shopify analytics.</td>
                    <td>session</td>
                    </tr>
                    <tr>
                    <td>_shopify_s</td>
                    <td>Shopify analytics.</td>
                    <td>30min</td>
                    </tr>
                    <tr>
                    <td>_shopify_sa_p</td>
                    <td>Shopify analytics relating to marketing &amp; referrals.</td>
                    <td>30min</td>
                    </tr>
                    <tr>
                    <td>_shopify_sa_t</td>
                    <td>Shopify analytics relating to marketing &amp; referrals.</td>
                    <td>30min</td>
                    </tr>
                    <tr>
                    <td>_shopify_y</td>
                    <td>Shopify analytics.</td>
                    <td>1y</td>
                    </tr>
                    <tr>
                    <td>_y</td>
                    <td>Shopify analytics.</td>
                    <td>1y</td>
                    </tr>
                    <tr>
                    <td>_shopify_evids</td>
                    <td>Shopify analytics.</td>
                    <td>session</td>
                    </tr>
                    <tr>
                    <td>_shopify_ga</td>
                    <td>Shopify and Google Analytics.</td>
                    <td>session</td>
                    </tr>
                    <tr>
                    <td>customer_auth_provider</td>
                    <td>Shopify analytics.</td>
                    <td>session</td>
                    </tr>
                    <tr>
                    <td>customer_auth_session_created_at</td>
                    <td>Shopify analytics.</td>
                    <td>session</td>
                    </tr>
                    </tbody>
                    </table>
                    <p><i>[INSERT OTHER COOKIES OR TRACKING TECHNOLOGIES THAT YOU USE]</i></p>
                    <p>The length of time that a cookie remains on your computer or mobile device depends on whether it is a “persistent” or “session” cookie. Session cookies last until you stop browsing and persistent cookies last until they expire or are deleted. Most of the cookies we use are persistent and will expire between 30 minutes and two years from the date they are downloaded to your device.</p>
                    <p>You can control and manage cookies in various ways. Please keep in mind that removing or blocking cookies can negatively impact your user experience and parts of our website may no longer be fully accessible.</p>
                    <p>Most browsers automatically accept cookies, but you can choose whether or not to accept cookies through your browser controls, often found in your browser’s “Tools” or “Preferences” menu. For more information on how to modify your browser settings or how to block, manage or filter cookies can be found in your browser’s help file or through such sites as: <a href="https://www.allaboutcookies.org" target="_blank">www.allaboutcookies.org</a>.</p>
                    <p>Additionally, please note that blocking cookies may not completely prevent how we share information with third parties such as our advertising partners. To exercise your rights or opt-out of certain uses of your information by these parties, please follow the instructions in the “Behavioural Advertising” section above.</p>
                    <h2>Do Not Track</h2>
                    <p>Please note that because there is no consistent industry understanding of how to respond to “Do Not Track” signals, we do not alter our data collection and usage practices when we detect such a signal from your browser.</p>
                    <Heading fontSize={"3xl"}>Changes</Heading>
                    <p>We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.</p>
                    <Heading fontSize={"3xl"}>Complaints</Heading>
                    <p>As noted above, if you would like to make a complaint, please contact us by e-mail or by mail using the details provided under “Contact” above.</p>
                    <p>If you are not satisfied with our response to your complaint, you have the right to lodge your complaint with the relevant data protection authority. You can contact your local data protection authority, or our supervisory authority here: <i>[Add contact information or website for the data protection authority in your jurisdiction. For example: <a href="https://ico.org.uk/make-a-complaint/" target="_blank">https://ico.org.uk/make-a-complaint/</a>]</i></p>
                    <p>Last updated: <i>[Date]</i></p>

				</Box>

			</Box>
		    <Footer />


		</Box>
		

    </ChakraProvider>
  )
}
