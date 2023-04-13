import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/provider'
import theme from '@/styles/theme'
import { Box, Heading,} from '@chakra-ui/layout'
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

// Components
import NavBar from '@/comps/navbar'
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
			<title>hansumfella | Privacy</title>
			<meta name="description" content="he's so hansum" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="https://hansumfella.com/images/hansum-circle.png" />

			{/* //   <!-- Facebook Meta Tags --> */}
			<meta property="og:url" content="https://hansumfella.com" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content="hansumfella" />
			<meta property="og:description" content="he's so hansum" />
			<meta property="og:image" content="https://hansumfella.com/images/hansum-circle.png" />

			{/* <!-- Twitter Meta Tags --> */}
			<meta name="twitter:card" content="summary_small_image" />
			<meta property="twitter:domain" content="hansumfella.com" />
			<meta property="twitter:url" content="https://hansumfella.com" />
			<meta name="twitter:title" content="hansumfella" />
			<meta name="twitter:description" content="he's so hansum" />
			<meta name="twitter:image" content="https://hansumfella.com/images/hansum-circle.png" />
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
                    <br /> <br />
                    This Privacy Policy describes how hansumfella.com (the “Site” or “we”) collects, uses, and discloses your Personal Information when you visit or make a purchase from the Site.
                    <br /> <br />
                    <Heading fontSize={"3xl"}>Contact</Heading>
                    <br />
                    After reviewing this policy, if you have additional questions, want more information about our privacy practices, or would like to make a complaint, please contact us by e-mail at privacy@hansumfella.com or by mail using the details provided below:
                    <br /> <br />
                    <Heading fontSize={"3xl"}>Collecting Personal Information</Heading>
                    <br />
                    When you visit the Site, we collect certain information about your device, your interaction with the Site, and information necessary to process your purchases. We may also collect additional information if you contact us for customer support. In this Privacy Policy, we refer to any information about an identifiable individual (including the information below) as “Personal Information”. See the list below for more information about what Personal Information we collect and why.
                    <br />
                    <Box
                      p={'2rem'}
                    >
                      <ul>
                        <li><Heading fontSize={'xl'}>Device information</Heading></li>
                        <Box
                          p={'1rem'}
                        >
                          <ul>
                          <li>Purpose of collection: to load the Site accurately for you, and to perform analytics on Site usage to optimize our Site.</li>
                          <li>Source of collection: Collected automatically when you access our Site using cookies, log files, web beacons, tags, or pixels.</li>
                          <li>Disclosure for a business purpose: shared with our processor Shopify.</li>
                          <li>Personal Information collected: version of web browser, IP address, time zone, cookie information, what sites or products you view, search terms, and how you interact with the Site.</li>
                          </ul>
                        </Box>
                        <li><Heading fontSize={'xl'}>Order information</Heading></li>
                        <Box
                          p={'1rem'}
                        >
                          <ul>
                          <li>Purpose of collection: to provide products or services to you to fulfill our conTract, to process your payment information, arrange for shipping, and provide you with invoices and/or order confirmations, communicate with you, screen our orders for potential risk or fraud, and when in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
                          <li>Source of collection: collected from you.</li>
                          <li>Disclosure for a business purpose: shared with our processor Shopify <i>[ADD ANY OTHER VENDORS WITH WHOM YOU SHARE THIS INFORMATION. FOR EXAMPLE, SALES CHANNELS, PAYMENT GATEWAYS, SHIPPING AND FULFILLMENT APPS]</i>.</li>
                          <li>Personal Information collected: name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number.</li>
                          </ul>
                        </Box>
                        <li><Heading fontSize={'xl'}>Customer support information</Heading></li>
                        <Box
                          p={'1rem'}
                        >
                          <ul>
                          <li>Purpose of collection:</li>
                          <li>Source of collection:</li>
                          <li>Disclosure for a business purpose:</li>
                          <li>Personal Information collected:</li>
                          <li>Purpose of collection: to provide customer support.</li>
                          <li>Source of collection: collected from you</li>
                          <li>Disclosure for a business purpose:</li>
                          <li>Personal Information collected:</li>
                          </ul>
                        </Box>
                      </ul>
                    </Box>

                    <Heading fontSize={'3xl'}>Minors</Heading>
                    <br /> 
                    The Site is not intended for individuals under the age of 13. We do not intentionally collect Personal Information from children. If you are the parent or guardian and believe your child has provided us with Personal Information, please contact us at the address above to request deletion.
                    <br /> <br /> <br />
                    <Heading fontSize={"3xl"}>Sharing Personal Information</Heading>
                    <br />
                    We share your Personal Information with service providers to help us provide our services and fulfill our conTracts with you, as described above. For example:
                    <Box pr={'2rem'} pl={'2rem'} pt={'1rem'}>
                      <ul>
                      <li>We use Shopify to power our online store. You can read more about how Shopify uses your Personal Information here: <a href="https://www.shopify.com/legal/privacy" target="_blank">https://www.shopify.com/legal/privacy</a>.</li>
                      <li>We may share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</li>
                      </ul>
                    </Box>
                    <br /> <br />
                    <Heading fontSize={"3xl"}>Behavioural Advertising</Heading>
                    <br />
                    As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For example:
                    <Box pr={'2rem'} pl={'2rem'} pt={'1rem'} pb={'1rem'}>
                      <ul>
                      <li>We use Google Analytics to help us understand how our customers use the Site. You can read more about how Google uses your Personal Information here: <a href="https://www.google.com/intl/en/policies/privacy/" target="_blank">https://www.google.com/intl/en/policies/privacy/</a>. You can also opt-out of Google Analytics here: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank">https://tools.google.com/dlpage/gaoptout</a>.</li>
                      <li>We use Shopify Audiences to help us show ads on other websites with our advertising partners to buyers who made purchases with other Shopify merchants and who may also be interested in what we have to offer. We also share information about your use of the Site, your purchases, and the email address associated with your purchases with Shopify Audiences, through which other Shopify merchants may make offers you may be interested in.</li>
                      <li>We use Google Ads to help us advertise to users on other websites, search engines, and products.</li>
                      </ul>
                    </Box>
                    <span>For more information about how targeted advertising works, you can visit the Network Advertising Initiative’s (“NAI”) educational page at <a href="https://www.networkadvertising.org/understanding-online-advertising/how-does-it-work" target="_blank">https://www.networkadvertising.org/understanding-online-advertising/how-does-it-work</a>.</span>
                    You can opt out of targeted advertising by:
                    <Box pr={'2rem'} pl={'2rem'} pt={'1rem'} pb={'1rem'}>
                    <li>FACEBOOK - <a href="https://www.facebook.com/settings/?tab=ads" target="_blank">https://www.facebook.com/settings/?tab=ads</a></li>
                    <li>GOOGLE - <a href="https://www.google.com/settings/ads/anonymous" target="_blank">https://www.google.com/settings/ads/anonymous</a></li>
                    <li><i>BING - <a href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads" target="_blank">https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads</a>]</i></li>
                    </Box>
                    <span>Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance’s opt-out portal at: <a href="https://optout.aboutads.info/" target="_blank">https://optout.aboutads.info/</a>.</span>
                    <br /> <br />

                    <Heading fontSize={"3xl"}>Using Personal Information</Heading>
                    <br />
                    
                    We use your personal Information to provide our services to you, which includes: offering products for sale, processing payments, shipping and fulfillment of your order, and keeping you up to date on new products, services, and offers.
                    
                    <br /> <br />
                    <Box pr={'2rem'} pl={'2rem'} pt={'1rem'} pb={'1rem'}>
                      <Heading fontSize={'2xl'}>Lawful basis</Heading>
                      <Box pr={'2rem'} pl={'2rem'} pt={'1rem'} pb={'1rem'}>
                        Pursuant to the General Data Protection Regulation (“GDPR”), if you are a resident of the European Economic Area (“EEA”), we process your personal information under the following lawful bases:
                        <Box pr={'2rem'} pl={'2rem'} pt={'1rem'} pb={'1rem'}>
                          <ul>
                          <li>Your consent;</li>
                          <li>The performance of the conTract between you and the Site;</li>
                          <li>Compliance with our legal obligations;</li>
                          <li>To protect your vital interests;</li>
                          <li>To perform a task carried out in the public interest;</li>
                          <li>For our legitimate interests, which do not override your fundamental rights and freedoms.</li>
                          </ul>
                        </Box>
                      </Box>
                      <Heading fontSize={'2xl'}>Retention</Heading>
                      <Box pr={'2rem'} pl={'2rem'} pt={'1rem'} pb={'1rem'}>
                        When you place an order through the Site, we will retain your Personal Information for our records unless and until you ask us to erase this information. For more information on your right of erasure, please see the ‘Your rights’ section below.
                        <h2>Automatic decision-making</h2>
                        If you are a resident of the EEA, you have the right to object to processing based solely on automated decision-making (which includes profiling), when that decision-making has a legal effect on you or otherwise significantly affects you.
                        We do not engage in fully automated decision-making that has a legal or otherwise significant effect using customer data.
                        Our processor Shopify uses limited automated decision-making to prevent fraud that does not have a legal or otherwise significant effect on you.
                        Services that include elements of automated decision-making include:
                        <Box pr={'2rem'} pl={'2rem'} pt={'1rem'} pb={'1rem'}>
                          <ul>
                          <li>Temporary blacklist of IP addresses associated with repeated failed Transactions. This blacklist persists for a small number of hours.</li>
                          <li>Temporary blacklist of credit cards associated with blacklisted IP addresses. This blacklist persists for a small number of days.</li>
                          </ul>
                        </Box>
                      </Box>
                    </Box>
                    <Heading fontSize={"3xl"}>Selling Personal Information</Heading>
                    <br />
                    Our Site sells Personal Information, as defined by the California Consumer Privacy Act of 2018 (“CCPA”).
                    <Box pr={'2rem'} pl={'2rem'} pt={'1rem'} pb={'1rem'}>
                      <ul>
                      <li>We do not sell any personal information about our users</li>
                      </ul>
                    </Box>

                    <Heading fontSize={"3xl"}>Your rights</Heading>
                    <Box pr={'2rem'} pl={'2rem'} pt={'1rem'} pb={'1rem'}>
                      <Heading fontSize={"2xl"}>GDPR</Heading>
                      <Box pr={'2rem'} pl={'2rem'} pt={'1rem'} pb={'1rem'}>
                        If you are a resident of the EEA, you have the right to access the Personal Information we hold about you, to port it to a new service, and to ask that your Personal Information be corrected, updated, or erased. If you would like to exercise these rights, please contact us through the contact information above.
                        Your Personal Information will be initially processed in Ireland and then will be Transferred outside of Europe for storage and further processing, including to Canada and the United States. For more information on how data Transfers comply with the GDPR, see Shopify’s GDPR Whitepaper: <a href="https://help.shopify.com/en/manual/your-account/privacy/GDPR" target="_blank">https://help.shopify.com/en/manual/your-account/privacy/GDPR</a>.
                      </Box>
                      <Heading fontSize={"2xl"}>CCPA</Heading>
                      <Box pr={'2rem'} pl={'2rem'} pt={'1rem'} pb={'1rem'}>
                        If you are a resident of California, you have the right to access the Personal Information we hold about you (also known as the ‘Right to Know’), to port it to a new service, and to ask that your Personal Information be corrected, updated, or erased. If you would like to exercise these rights, please contact us through the contact information above. 
                        If you would like to designate an authorized agent to submit these requests on your behalf, please contact us at the address above.
                      </Box>
                    </Box>
                    <Heading fontSize={"3xl"}>Cookies</Heading>
                    <br /> 
                    A cookie is a small amount of information that’s downloaded to your computer or device when you visit our Site. We use a number of different cookies, including functional, performance, advertising, and social media or content cookies. Cookies make your browsing experience better by allowing the website to remember your actions and preferences (such as login and region selection). This means you don’t have to re-enter this information each time you return to the site or browse from one page to another. Cookies also provide information on how people use the website, for instance whether it’s their first time visiting or if they are a frequent visitor.
                    We use the following cookies to optimize your experience on our Site and to provide our services.
                    <br /> <br />
                    <Heading fontSize={"2xl"}>Cookies Necessary for the Functioning of the Store</Heading>
                    <br />
                    <TableContainer>
                      <Table>
                        <Thead>
                          <Tr>
                          <Th>Name</Th>
                          <Th>Function</Th>
                          <Th>Duration</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Td>_ab</Td>
                            <Td>Used in connection with access to admin.</Td>
                            <Td>2y</Td>
                          </Tr>
                          <Tr>
                          <Td>_secure_session_id</Td>
                          <Td>Used in connection with navigation through a storefront.</Td>
                          <Td>24h</Td>
                          </Tr>
                          <Tr>
                          <Td>_shopify_counTry</Td>
                          <Td>Used in connection with checkout.</Td>
                          <Td>session</Td>
                          </Tr>
                          <Tr>
                          <Td>_shopify_m</Td>
                          <Td>Used for managing customer privacy settings.</Td>
                          <Td>1y</Td>
                          </Tr>
                          <Tr>
                          <Td>_shopify_tm</Td>
                          <Td>Used for managing customer privacy settings.</Td>
                          <Td>30min</Td>
                          </Tr>
                          <Tr>
                          <Td>_shopify_tw</Td>
                          <Td>Used for managing customer privacy settings.</Td>
                          <Td>2w</Td>
                          </Tr>
                          <Tr>
                          <Td>_storefront_u</Td>
                          <Td>Used to facilitate updating customer account information.</Td>
                          <Td>1min</Td>
                          </Tr>
                          <Tr>
                          <Td>_Tracking_consent</Td>
                          <Td>Tracking preferences.</Td>
                          <Td>1y</Td>
                          </Tr>
                          <Tr>
                          <Td>c</Td>
                          <Td>Used in connection with checkout.</Td>
                          <Td>1y</Td>
                          </Tr>
                          <Tr>
                          <Td>cart</Td>
                          <Td>Used in connection with shopping cart.</Td>
                          <Td>2w</Td>
                          </Tr>
                          <Tr>
                          <Td>cart_currency</Td>
                          <Td>Used in connection with shopping cart.</Td>
                          <Td>2w</Td>
                          </Tr>
                          <Tr>
                          <Td>cart_sig</Td>
                          <Td>Used in connection with checkout.</Td>
                          <Td>2w</Td>
                          </Tr>
                          <Tr>
                          <Td>cart_ts</Td>
                          <Td>Used in connection with checkout.</Td>
                          <Td>2w</Td>
                          </Tr>
                          <Tr>
                          <Td>cart_ver</Td>
                          <Td>Used in connection with shopping cart.</Td>
                          <Td>2w</Td>
                          </Tr>
                          <Tr>
                          <Td>checkout</Td>
                          <Td>Used in connection with checkout.</Td>
                          <Td>4w</Td>
                          </Tr>
                          <Tr>
                          <Td>checkout_token</Td>
                          <Td>Used in connection with checkout.</Td>
                          <Td>1y</Td>
                          </Tr>
                          <Tr>
                          <Td>dynamic_checkout_shown_on_cart</Td>
                          <Td>Used in connection with checkout.</Td>
                          <Td>30min</Td>
                          </Tr>
                          <Tr>
                          <Td>hide_shopify_pay_for_checkout</Td>
                          <Td>Used in connection with checkout.</Td>
                          <Td>session</Td>
                          </Tr>
                          <Tr>
                          <Td>keep_alive</Td>
                          <Td>Used in connection with buyer localization.</Td>
                          <Td>2w</Td>
                          </Tr>
                          <Tr>
                          <Td>master_device_id</Td>
                          <Td>Used in connection with merchant login.</Td>
                          <Td>2y</Td>
                          </Tr>
                          <Tr>
                          <Td>previous_step</Td>
                          <Td>Used in connection with checkout.</Td>
                          <Td>1y</Td>
                          </Tr>
                          <Tr>
                          <Td>remember_me</Td>
                          <Td>Used in connection with checkout.</Td>
                          <Td>1y</Td>
                          </Tr>
                          <Tr>
                          <Td>secure_customer_sig</Td>
                          <Td>Used in connection with customer login.</Td>
                          <Td>20y</Td>
                          </Tr>
                          <Tr>
                          <Td>shopify_pay</Td>
                          <Td>Used in connection with checkout.</Td>
                          <Td>1y</Td>
                          </Tr>
                          <Tr>
                          <Td>shopify_pay_redirect</Td>
                          <Td>Used in connection with checkout.</Td>
                          <Td>30 minutes, 3w or 1y depending on value</Td>
                          </Tr>
                          <Tr>
                          <Td>storefront_digest</Td>
                          <Td>Used in connection with customer login.</Td>
                          <Td>2y</Td>
                          </Tr>
                          <Tr>
                          <Td>Tracked_start_checkout</Td>
                          <Td>Used in connection with checkout.</Td>
                          <Td>1y</Td>
                          </Tr>
                          <Tr>
                          <Td>checkout_one_experiment</Td>
                          <Td>Used in connection with checkout.</Td>
                          <Td>session</Td>
                          </Tr>
                          <Tr>
                          <Td>checkout_session_lookup</Td>
                          <Td>Used in connection with checkout.</Td>
                          <Td>3w</Td>
                          </Tr>
                          <Tr>
                          <Td>checkout_session_token_&lt;&lt;token&gt;&gt;</Td>
                          <Td>Used in connection with checkout.</Td>
                          <Td>3w</Td>
                          </Tr>
                          <Tr>
                          <Td>identity-state</Td>
                          <Td>Used in connection with customer authentication.</Td>
                          <Td>24h</Td>
                          </Tr>
                          <Tr>
                          <Td>identity-state-&lt;&lt;token&gt;&gt;</Td>
                          <Td>Used in connection with customer authentication.</Td>
                          <Td>24h</Td>
                          </Tr>
                          <Tr>
                          <Td>identity_customer_account_number</Td>
                          <Td>Used in connection with customer authentication.</Td>
                          <Td>12w</Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </TableContainer>
                    <br />
                    <Heading fontSize={"2xl"}>Reporting and Analytics</Heading>
                    <br />
                    <Table>
                    <Thead>
                    <Tr>
                    <Th>Name</Th>
                    <Th>Function</Th>
                    <Th>Duration</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                    <Td>_landing_page</Td>
                    <Td>Track landing pages.</Td>
                    <Td>2w</Td>
                    </Tr>
                    <Tr>
                    <Td>_orig_referrer</Td>
                    <Td>Track landing pages.</Td>
                    <Td>2w</Td>
                    </Tr>
                    <Tr>
                    <Td>_s</Td>
                    <Td>Shopify analytics.</Td>
                    <Td>30min</Td>
                    </Tr>
                    <Tr>
                    <Td>_shopify_d</Td>
                    <Td>Shopify analytics.</Td>
                    <Td>session</Td>
                    </Tr>
                    <Tr>
                    <Td>_shopify_s</Td>
                    <Td>Shopify analytics.</Td>
                    <Td>30min</Td>
                    </Tr>
                    <Tr>
                    <Td>_shopify_sa_p</Td>
                    <Td>Shopify analytics relating to marketing &amp; referrals.</Td>
                    <Td>30min</Td>
                    </Tr>
                    <Tr>
                    <Td>_shopify_sa_t</Td>
                    <Td>Shopify analytics relating to marketing &amp; referrals.</Td>
                    <Td>30min</Td>
                    </Tr>
                    <Tr>
                    <Td>_shopify_y</Td>
                    <Td>Shopify analytics.</Td>
                    <Td>1y</Td>
                    </Tr>
                    <Tr>
                    <Td>_y</Td>
                    <Td>Shopify analytics.</Td>
                    <Td>1y</Td>
                    </Tr>
                    <Tr>
                    <Td>_shopify_evids</Td>
                    <Td>Shopify analytics.</Td>
                    <Td>session</Td>
                    </Tr>
                    <Tr>
                    <Td>_shopify_ga</Td>
                    <Td>Shopify and Google Analytics.</Td>
                    <Td>session</Td>
                    </Tr>
                    <Tr>
                    <Td>customer_auth_provider</Td>
                    <Td>Shopify analytics.</Td>
                    <Td>session</Td>
                    </Tr>
                    <Tr>
                    <Td>customer_auth_session_created_at</Td>
                    <Td>Shopify analytics.</Td>
                    <Td>session</Td>
                    </Tr>
                    </Tbody>
                    </Table>
                    <br /> <br />
                    <span>The length of time that a cookie remains on your computer or mobile device depends on whether it is a “persistent” or “session” cookie. Session cookies last until you stop browsing and persistent cookies last until they expire or are deleted. Most of the cookies we use are persistent and will expire between 30 minutes and two years from the date they are downloaded to your device.
                    You can conTrol and manage cookies in various ways. Please keep in mind that removing or blocking cookies can negatively impact your user experience and parts of our website may no longer be fully accessible.
                    Most browsers automatically accept cookies, but you can choose whether or not to accept cookies through your browser conTrols, often found in your browser’s “Tools” or “Preferences” menu. For more information on how to modify your browser settings or how to block, manage or filter cookies can be found in your browser’s help file or through such sites as: <a href="https://www.allaboutcookies.org" target="_blank">www.allaboutcookies.org</a>.
                    Additionally, please note that blocking cookies may not completely prevent how we share information with third parties such as our advertising partners. To exercise your rights or opt-out of certain uses of your information by these parties, please follow the instructions in the “Behavioural Advertising” section above.</span>
                    <br /> <br />
                    <Heading fontSize={"3xl"}>Do Not Track</Heading>
                    <br />
                    Please note that because there is no consistent industry understanding of how to respond to “Do Not Track” signals, we do not alter our data collection and usage practices when we detect such a signal from your browser.
                    <br /> <br />
                    <Heading fontSize={"3xl"}>Changes</Heading>
                    <br />
                    We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.
                    <br /> <br />
                    <Heading fontSize={"3xl"}>Complaints</Heading>
                    <br />
                    As noted above, if you would like to make a complaint, please contact us by e-mail or by mail using the details provided under “Contact” above.
                    If you are not satisfied with our response to your complaint, you have the right to lodge your complaint with the relevant data protection authority. You can contact your local data protection authority, or our supervisory authority here: <i>[Add contact information or website for the data protection authority in your jurisdiction. For example: <a href="https://ico.org.uk/make-a-complaint/" target="_blank">https://ico.org.uk/make-a-complaint/</a>]</i>
                    <br/> <br/> <br/>
                    <Heading fontSize={'2xl'}>Last updated: March 13, 2023</Heading>

				</Box>

			</Box>
		    <Footer />


		</Box>
		

    </ChakraProvider>
  )
}
