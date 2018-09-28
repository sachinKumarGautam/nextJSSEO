import React, { Component } from 'react'
import StaticPage from '../../components/StaticPage'

import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const styles = theme => {
  return {
    description: {
      ...theme.typography.body2,
      color: theme.palette.customGrey.grey500,
      lineHeight: 1.29,
      marginBottom: theme.spacing.unit * 3,
      fontWeight: theme.typography.fontWeightBold
    },
    termsTitle: {
      ...theme.typography.body2,
      color: theme.palette.customGrey.grey500,
      lineHeight: 1.29,
      marginBottom: theme.spacing.unit * 3,
      fontWeight: theme.typography.fontWeightBold
    },
    termsDescription: {
      ...theme.typography.body2,
      color: theme.palette.customGrey.grey500,
      lineHeight: 1.29,
      marginBottom: theme.spacing.unit * 3,
      marginLeft: theme.spacing.unit * 2
    },
    subTerms: {
      ...theme.typography.body2,
      color: theme.palette.customGrey.grey500,
      lineHeight: 1.29,
      marginBottom: theme.spacing.unit * 3,
      marginLeft: theme.spacing.unit * 5.5
    },
    header: {
      ...theme.typography.caption,
      color: theme.palette.customGrey.grey500,
      textAlign: 'right',
      justifyContent: 'right',
      marginBottom: theme.spacing.unit * 3
    }
  }
}

class TermsAndCondition extends Component {
  render() {
    return (
      <StaticPage
        title='Terms & conditions'
        content={<div>
          <Typography
            variant='body2'
            className={this.props.classes.header}
          >
            <i>Privileged & Confidential<br /></i>
            <i>Draft Website Terms & Conditions<br /></i>
            <i>Draft for discussion purposes only<br /></i>
            <i>July 19, 2018</i>
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.description}
          >
            PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BY ACCESSING OR USING THIS INTERNET BASED PLATFORM, YOU AGREE TO BE BOUND BY THE TERMS DESCRIBED HEREIN AND ALL TERMS INCORPORATED BY REFERENCE. IF YOU DO NOT AGREE TO ALL OF THESE TERMS, DO NOT USE THIS INTERNET BASED PLATFORM.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsTitle}
          >
            1. What is Lifcare?
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            1.1. The domain name www.lifcare.in, an internet based portal and Lifcare a mobile application, is owned and operated by Corner Store Technologies Private Limited, a company duly incorporated under the provisions of the Companies Act, 2013 (hereinafter referred to as <b>“Lifcare”</b> or <b>“We”</b> or <b>“Our”</b> or <b>“Us”</b> or <b>“Company”</b>), which term shall include its successors and permitted assigns. The domain name and the mobile application are collectively referred to as the <b>“Website”</b>.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            1.2. Your access or use of the Website, transaction on the Website and use of Services (as defined herein below) hosted or managed remotely through the Website, are governed by the following terms and conditions (hereinafter referred to as the <b>“Terms and Conditions”</b>), including the applicable policies which are incorporated herein by way of reference. These Terms and Conditions constitutes a legal and binding contract between you (hereinafter referred to as <b>“You”</b> or <b>“Your”</b> or the <b>“User”</b>) on one part and the Company on the other Part.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            1.3. By accessing, browsing or in any way transacting on the Website, or availing any Services, You signify Your agreement to be bound by these Terms and Conditions. Further, by impliedly or expressly accepting these Terms and Conditions, You also accept and agree to be bound by Our policies, including the Privacy Policy as set out in on the Website, and such other rules, guidelines, policies, terms and conditions as are relevant under the applicable law(s) in India and other jurisdictions for the purposes of accessing, browsing or transacting on the Website, or availing any of the Services, and such rules, guidelines, policies, terms and conditions shall be deemed to be incorporated into, and considered as part and parcel of these Terms and Conditions. However, if You navigate away from the Website to a third party website, You may be subject to alternative terms and conditions of use and privacy policy, as may be specified on such website. In such event, the terms and conditions of use and privacy policy applicable to that website will govern Your use of that website.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            1.4. The Website is a platform that facilitates (i) online purchase of pharmaceutical products sold by various third party pharmacies and manufactures (“<b>Third Party Pharmacies</b>”) facilitating sale on retail basis, not for resale, but for use and consumption by the purchaser/consumer; (ii) sale of medicines on whole sale basis; (iii) helping people to manage diseases by timely refilling medicines for the Users on a basis plan selected by the User. Further the Website also serves as an information platform providing health and wellness related information to the Users accessing the Website (The services of Third Party Pharmacies and the information services is collectively referred to as the <b>“Services”</b>).
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            1.5. The arrangement between the Third Party Pharmacies, You and Us shall be governed in accordance with these Terms and Conditions. The Services would be made available to such natural persons who have agreed to use the Website after obtaining due registration, in accordance with the procedure as determined by Us, from time to time, (referred to as <b>“You”</b> or <b>“Your”</b> or <b>“Yourself”</b> or <b>“User”</b>), which terms shall also include natural persons who are accessing the Website merely as visitors. The Services are offered to You through various modes which shall include issue of discount coupons and vouchers that can be redeemed for various goods/ services offered for sale by Third Party Pharmacies. To facilitate the relation between You and the Third Party Pharmacies through the Website, Company shall send to You promotional content including but not limited to emailers, notifications and messages.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            1.6. Company reserves the right to change or modify these Terms and Conditions or any policy or guideline of the Website including the Privacy Policy, at any time and in its sole discretion. Any changes or modifications will be effective immediately upon posting the revisions on the Website and You waive any right You may have to receive specific notice of such changes or modifications. Your continued use of the Website will confirm Your acceptance of such changes or modifications; therefore, You should frequently review these Terms and Conditions and applicable policies to understand the terms and conditions that apply to Your use of the Website.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            1.7. As a condition to Your use of the Website, You must be 18 (eighteen) years of age or older to use or visit the Website in any manner. By visiting the Website or accepting these Terms and Conditions, You represent and warrant to the Company that You are 18 (eighteen) years of age or older, and that You have the right, authority and capacity to use the Website and agree to and abide by these Terms and Conditions.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            1.8. These Terms and Conditions is published in compliance of, and is governed by the provisions of Indian laws, including but limited to:
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.subTerms}
          >
            1.8.1. the Indian Contract Act, 1872 (<b>“Contract Act”</b>);
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.subTerms}
          >
            1.8.2. the (Indian) Information Technology Act, 2000 (<b>“IT Act”</b>) and the rules, regulations, guidelines and clarifications framed thereunder, including the (Indian) Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Information) Rules, 2011, and the (Indian) Information Technology (Intermediaries Guidelines) Rules, 2011 (<b>“IG Guidelines”</b>);
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.subTerms}
          >
            1.8.3. the Drugs and Cosmetic Act, 1940 (<b>“Drugs Act”</b>), read with the Drugs and Cosmetics Rules, 1945 (<b>“Drugs Rules”</b>);
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.subTerms}
          >
            1.8.4. the Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954 (<b>“Drugs and Magic Act”</b>);
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.subTerms}
          >
            1.8.5. the Indian Medical Council Act, 1956 read with the Indian Medical Council Rules, 1957;
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.subTerms}
          >
            1.8.6. Pharmacy Act, 1948 (<b>“Pharmacy Act”</b>) and
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.subTerms}
          >
            1.8.6. the Consumer Protection Act, 1986.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            1.9. Company authorizes You to view and access the content available on the Website solely for the purposes of availing the Services, such as visiting, using, ordering, receiving, delivering and communicating only as per these Terms and Conditions.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            1.10. Compliance with these Terms and Conditions would entitle You to a personal, non-exclusive, non-transferable, limited privilege to access on the Website.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            1.11. These Terms and Conditions constitute an electronic record in terms of the IT Act and rules framed there under, as applicable and amended from time to time. This electronic record is generated by a computer system and does not require any physical or digital signatures.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsTitle}
          >
            2. ELIGIBILITY TO USE
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            2.1. Use of the Website is available only to persons who can form legally binding contracts under the Contract Act. Persons who are <b>"incompetent to contract"</b> within the meaning of the Contract Act including minors, un-discharged insolvents etc. are not eligible to use the Website. The medicines shall also not available to any Users suspended or removed from the Company's system for any reason whatsoever. If You do not conform to the above qualification, You will not be permitted to put a requisition for the medicines through the Website. By accessing and using this Website, You represent that You are of legal age to form a binding contract and are not a person barred from receiving services under the laws as applicable in India. Notwithstanding the foregoing, if You are below the age of 18 (eighteen) years, You may avail the services provided by the Website, through Your legal guardian in accordance with the applicable laws. The Company reserves the right to terminate Your membership and / or refuse to provide You with access to the Website if it is brought to Company's notice or if it is discovered that You are under the age of 18 years.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            2.2. Company reserves the right to refuse access to use the services offered at the Website to new Users or to terminate access granted to existing Users at any time without according any reasons for doing so and You shall have no right to object to the same.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsTitle}
          >
            3. CREATING AN ACCOUNT
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            3.1. To use certain features of the Website (e.g., ordering medicines, posting rating/reviews etc.), You must register with lifcare.in (<b>"Lifcare Account"</b>) and provide certain information about Yourself as prompted by the customer information form, including, Your name, gender, email address, account password, mobile phone number and billing/shipping address. All of Your registration information is protected by our Privacy Policy.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            3.2. You represent and warrant that the information You submit during registration is truthful and accurate and that You will maintain the accuracy of such information.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            3.3. Your Lifcare Account username and password are personal to You. You may not transfer Your account and You will be responsible for the activities associated with Your Lifcare Account.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            3.4. Lifcare.in will not be liable for any loss or damages as a result of Your failure to maintain the confidentiality of Your account credentials. If You suspect any unauthorised use of Your Lifcare Account, You shall immediately notify lifcare.in.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            3.5. It is Your responsibility to keep Your email address up-to-date on Your account setup at lifcare.in, so that we can communicate with You electronically.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsTitle}
          >
            4. PERSONAL CONSUMPTION
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            4.1. You represent that purchase of any medicines is for your personal consumption and use for the personal consumption and use of Your family members only and shall not be used by any other person, shall not be resold or used for any unauthorised or illegal purpose.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            4.2. A parent or legal guardian of a person ‘incompetent to contract’ such as minors or persons with unsound mind, would be permitted to access and use the Website for the purposes of purchasing Products on behalf of such persons.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsTitle}
          >
            5. PRICE AND PAYMENT
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            5.1. All our medicines prices include all applicable statutory taxes.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            5.2. We make every effort to make sure that the pricing and availability of the medicines is accurate and up to date. However, rarely, there may be an error on the pricing of the medicines or an error related to its availability. In such cases, we are not responsible for any typographical errors and we reserve the right to cancel the sale.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            5.3. We reserve the right to correct any inaccuracies or omissions related to pricing and medicine availability/descriptions, even after You have submitted Your order, and to change or update any other information at any time without prior notice.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            5.4. Delivery times may vary depending on the delivery location as well as the type of product You order.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            5.5 You can make the payment via any one of the following methods of payment: Credit/Debit Card, Net Banking, Wallet or Cash on Delivery.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            5.6. Credit/Debit Card/Wallet and Net Banking Payments are processed via our online payment service partners.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsTitle}
          >
            6. ORDER PLACEMENT
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            6.1. The placement of an order by You shall constitute an offer by You to enter into an agreement with the Company or the relevant Third Party Pharmacy (<b>“Offer”</b>). Post the Offer, the Website shall send an email/SMS to You acknowledging successful placement of Your order technically. However, such an email shall not be considered as an acceptance of the Offer by the Company. The acceptance of the Offer shall take place, in case of prescription drugs, after the validation/ verification of the prescription by the registered pharmacist of the Company and the ascertainment of the available stock, subject however, to the physical verification of the original prescription by the Company’s registered pharmacist. If the Company is unable to accept the Offer for any reason whatsoever including discontinuance of the medicines ordered, non-availability of stock, invalid prescription, etc. then the Company shall be entitled to cancel the Offer within a maximum period of 7 working days from the date of receipt of the Offer. Payment shall be refunded as soon as the order is cancelled in case payment was received along with the Offer.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            6.2. By placing an order through the Website, You represent and declare that:
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.subTerms}
          >
            6.2.1. You have no known allergies or sensitivities to any medicines ordered.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.subTerms}
          >
            6.2.2. You are not taking any parallel medications with which the medicines ordered are likely to relate or react.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.subTerms}
          >
            6.2.3. For prescription items: You are taking the medication after consulting Your doctor/ registered medical practitioner. The copy of the prescription shown to the registered medical practitioner/doctor is genuine.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            6.3. You have full knowledge of the implications, actions, interactions and side effects of any medications that have been prescribed, including the adverse effects of skipping the medication.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            6.4. Please note that all prescription medicines are dispensed or sent only against a valid prescription issued by a registered medical practitioner/doctor which has been approved by our registered pharmacist subject to physical verification of the original prescription.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            6.5. Valid photo identification proof and address proof (driving license, Election Card or Aadhar Card) is required at the time of placing and taking delivery of an order for pharmacy products.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            6.6. Payment for the pharmaceutical products ordered, is accepted at the time of physical delivery of the product either via credit card, debit card, online banking, wallet or CoD (Cash on delivery).
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            6.7. You hereby consent to the Company’s right to contact the relevant doctor to verify the authenticity of the prescription.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsTitle}
          >
            7. RETURN AND REFUND POLICY
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            7.1. We offer return and refund on the medicines ordered by You which are subject to further terms and conditions as detailed in the return and refund policy (<b>“Return and Refund Policy”</b>). The Return and Refund Policy forms an integral part of these Terms and Conditions and the Users are requested to carefully read the same.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsTitle}
          >
            8. NO PRODUCT LIABILITY
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            8.1. The Company shall not be responsible or liable in any manner to the Users or any Third Party Pharmacies (collectively referred to as the <b>“Other Parties”</b>) for any losses, damage, injuries or expenses incurred by Other Parties as a result of any disclosures made by the Company, where Other Parties have consented to the making of such disclosures by the Company. If the Other Parties had revoked such consent under the terms of the Privacy Policy, then the Company shall not be responsible or liable in any manner to the Other Parties for any losses, damage, injuries or expenses incurred by the Other Parties as a result of any disclosures made by the Company prior to its actual receipt of such revocation.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            8.2. The services provided by the Company are provided ‘as is’, as available, and without any warranties or conditions (express or implied, including the implied warranties of merchantability, accuracy, fitness for a particular purpose, title and non-infringement, arising by statute or otherwise in law or from a course of dealing or usage or trade). The Company does not provide or make any representations, warranties or guarantees, express or implied about the Website or the services. The Company does not verify any content or information provided by the Other Parties on the Website and to the fullest extent permitted by applicable law(s), disclaims all liability arising out of the Other Parties’ use or reliance upon the Website, the services, the Company’s content, third party contents, representations and warranties made by the Other Parties on the Website or any loss arising out of the manner in which the services have been rendered.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            8.3. The Company shall not be responsible for the mishaps/missed services due to no service/no show from the Other Parties; the Company shall not be responsible for any error in any of the services being provided by the Third Party Pharmacies.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            8.4. The Other Parties further accept and acknowledge that the Company does not verify any content or information provided by either the Users or the Third Party Pharmacies or obtained from the Users or the Third Party Pharmacies, and to fullest extent permitted by applicable law(s), disclaims all liability arising out of the Other Parties’ use or reliance upon the Website, the Services, the Company’s content, third party content, representations and warranties made by the Other Parties on the Website or any opinion or suggestion given or expressed by the Company or any Third Party Pharmacies in relation to any Services provided by the Company.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            8.5. The Company assumes no responsibility, and shall not be liable for, any damages to, or viruses that may infect Other Parties’ equipment on account of the Other Parties’ access to, use of, or browsing the Website or the downloading of any material, data, text, images, video content, or audio content from the Website. If any of the Other Party is dissatisfied with the Website, the sole remedy of such Other Party(s) is to discontinue using the Website.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            8.6. To the maximum extent permitted by applicable law(s), the Company, its affiliates, independent contractors, service providers, consultants, licensors, agents, and representatives, and each of their respective directors, officers or employees (“Protected Entities”), shall not be liable for any direct, indirect, special, incidental, punitive, exemplary or consequential damages, or any other damages of any kind, arising from, or directly or indirectly related to, (i) the use of, or the inability to use, the Website or the content, materials and functions related thereto; (ii) User's provision of information via the Website; even if such Protected Entity has been advised of the possibility of such damages.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            8.7. In no event shall the total aggregate liability of the Protected Entities to any Other Parties for all damages, losses, and causes of action (whether in contract or tort, including, but not limited to negligence, strict liability, product liability or otherwise) arising from these Terms and Conditions or any Other Parties’ use of the Website exceed an aggregate amount of INR 50,000. The Company accepts no liability for any errors or omissions on behalf of the Other Parties.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            8.8. In no event shall the Protected Entities be liable for failure on the part of the Users or Third Party Pharmacies to provide agreed Services or to make himself/herself available at the appointed time, cancellation or rescheduling of appointments. In no event shall the Protected Entities be liable for any comments or feedback given by any of the Users in relation to the Services provided by a Third Party Pharmacies.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsTitle}
          >
            9. COMMUNICATIONS
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            9.1. By using the Website, it is deemed that You have consented to receiving calls, auto-dialed and/or pre-recorded message calls, SMS/notification, e-mails, from the Company and/or their representatives at any time with the use of the telephone number and e-mail address that has been provided by You for the use of the Website. This consent to be contacted is for purposes that include and are not limited to clarification calls, marketing and promotional calls/electronic messages. In case You wish the communications to cease, kindly set your preferences via email addressed to the Company.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsTitle}
          >
            10. PRESCRIPTION MEDICATION POLICY
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.description}
          >
            Lifcare.in, a fully licensed and regulated pharmacy, takes all precautions to strictly abide by the laws and regulations set forth in the dispensing of prescription medications. By placing the order for Your prescription medicines, You acknowledge and accept the following terms regarding the purchase of any prescription medicines.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            10.1. Lifcare.in will not dispense any prescription medication without a valid prescription from a licensed physician.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            10.2. If You are ordering prescription medication(s), You hereby confirm that You will send us a scanned copy of Your valid prescription(s) via email, fax, Whatsapp, or by post, and this prescription shall then be subject to the scrutiny of and approval by our qualified pharmacists.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            10.3. The information provided in the lifcare.in is for informative purposes only and this Website is not intended to provide diagnosis, treatment or medical advice. We are not liable for any adverse effects or harm to You as a result of Your reliance on the information in the Website.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            10.4. The Company requires either the User or customer to confirm he/she is completely aware of the indications, side effects, drug interactions, effects of missed dose or overdose of the medicines he/she orders from us. It is imperative to seek professional advice from Your physician before purchasing or consuming any medicine from lifcare.in.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsTitle}
          >
            11. INTELLECTUAL PROPERTY RIGHTS
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            11.1. All content on the Website including images, illustrations, text, graphics, logos, design, audio or video clips (if any), artwork and computer code (together “Content”) is owned and controlled by the Company and the design, structure, selection, coordination, expression, look and feel and arrangement of such Content is protected by copyright, patent and trademark laws, and various other intellectual property rights.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            11.2. Unless otherwise indicated or anything contained to the contrary or any proprietary material owned by a third party and so expressly mentioned, Company owns all intellectual property rights to and into the trademark lifcare.in, and the Website, including, without limitation, any and all rights, title and interest in and to copyright, related rights, patents, utility models, designs, know-how, trade secrets, inventions, goodwill, source code, meta tags, databases, text, content, graphics, icons, and hyperlinks.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            11.3. Except as expressly provided herein, You acknowledge and agree that You shall not copy, republish, post, display, translate, transmit, reproduce or distribute any Content through any medium without obtaining the necessary authorization from company or third party owner of such Content.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsTitle}
          >
            12. PRIVACY POLICY
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            12.1. Subject to the Privacy Policy, the Company shall make reasonably commercial efforts to keep the information provided by You (while placing an order for purchase of medicine or otherwise in the course of Your use of the Website) secure and confidential.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsTitle}
          >
            13. USER CONDUCT
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            13.1. You are not permitted to host, display, upload, modify, publish, transmit, update or share any information that:
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.subTerms}
          >
            13.1.1. belongs to another person and to which You do not have any right;
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.subTerms}
          >
            13.1.2. is grossly harmful, harassing, blasphemous, defamatory, obscene, pornographic, paedophilic, libellous, invasive of another's privacy, hateful, or racially, ethnically objectionable, disparaging, relating or encouraging money laundering or gambling, or otherwise unlawful in any manner whatever;
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.subTerms}
          >
            13.1.3. harm minors in any way;
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.subTerms}
          >
            13.1.4. infringes any patent, trademark, copyright or other proprietary rights;
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.subTerms}
          >
            13.1.5. violates any law for the time being in force;
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.subTerms}
          >
            13.1.6. deceives or misleads the addressee about the origin of such messages or communicates any information which is grossly offensive or menacing in nature;
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.subTerms}
          >
            13.1.7. impersonate another person;
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.subTerms}
          >
            13.1.8. contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer resource; and
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.subTerms}
          >
            13.1.9. threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign states, or public order or causes incitement to the commission of any cognisable offence or prevents investigation of any offence or is insulting any other nation.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            13.2. You are also prohibited from:
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.subTerms}
          >
            13.2.1. violating or attempting to violate the integrity or security of the Website;
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.subTerms}
          >
            13.2.2. transmitting any information (including job posts, messages and hyperlinks) on or through the Website that is disruptive or competitive to the business of the Company;
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.subTerms}
          >
            13.2.3. making any unsolicited communications to other users of the Website
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.subTerms}
          >
            13.2.4. using any engine, software, tool, agent or other device or mechanism (such as spiders, robots, avatars or intelligent agents) to navigate or search the Website; or
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.subTerms}
          >
            13.2.5. attempting to decipher, decompile, disassemble or reverse engineer any part of the Website.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            13.3. The Company shall be entitled to disable or remove the aforesaid information upon becoming aware of the same, either by itself or through any person affected by such information. Further, in case of non-compliance with any applicable laws, rules or regulations, or the Terms and Conditions (including the Privacy Policy) by You, the Company has the right to immediately terminate and/or prevent Your access to the Website and to remove any non-compliant information.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsTitle}
          >
            14. TERMINATION
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            14.1. You agree that lifcare.in, in its sole discretion and for any or no reason, including without limitation if You breach these Terms and Conditions, may terminate Your access to and use of the Website, at any time. You agree that any termination of Your access to the Website may be effected without prior notice, and You agree that lifcare.in shall not be liable to You for any such termination. Your right to use the Company’s Website/Service immediately ceases upon termination of Your access/use of the Website.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsTitle}
          >
            15. INDEMNIFICATION
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            15.1. You agree to indemnify, defend and hold harmless each of the Company, its officers, directors, employees, associates, partners or agents (each an <b>“Indemnified Party”</b>) from and against any and all losses, liabilities, claims, damages, demands, costs and expenses (including legal fees and disbursements in connection therewith and interest chargeable thereon) asserted against or incurred by such Indemnified Party in connection with, arising out of or resulting from (i) any misrepresentation or inaccuracy in any representation or warranty provided by You in these Terms and Conditions, (ii) breach or non-performance of any covenant or obligation to be performed by You pursuant to these Terms and Conditions or (iii) non-compliance of applicable laws by You. Further, You agree to hold us harmless against any claims made by any third party due to, or arising out of, or in connection with, Your use of the Website.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            15.2. Notwithstanding anything to contrary, Company's entire liability to You under this Terms and Conditions or otherwise shall be the refund of the money charged from You for any specific voucher or Service, under which the unlikely liability arises.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            15.3. In no event shall the Company, its officers, directors, employees, associates, partners or agents be liable to You for any special, incidental, indirect, consequential or punitive damages whatsoever arising out of or in connection with Your use of or access to the Website. The limitations and exclusions in this section shall apply to the maximum extent permitted by applicable law.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsTitle}
          >
            16. SEVERABILITY
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            16.1. If any provision of these Terms and Conditions is deemed invalid, unlawful, void or for any other reason unenforceable, then that provision shall be deemed severable from these Terms and Conditions and shall not affect the validity and enforceability of any of the remaining provisions.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsTitle}
          >
            17. WEBSITE AVAILABILITY
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            17.1. The Company provides no representation or assurance that access to the Website will be uninterrupted or error free.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            17.2. The Company assumes no responsibility, and shall not be liable for, any damages caused by viruses, trojans or other forms of malware, adware and other malicious programs that may infect Your computer system, mobile phone or any hardware or software used by You to access or use the Website, or Your account on the Website and which may have an adverse impact on Your experience of browsing the Website. If You are dissatisfied with the Website, Your sole remedy is to discontinue using the Website. You are expected to use adequate anti-virus software and firewalls in Your device to guard against possible attacks by malicious software.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsTitle}
          >
            18. NO WAIVER
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            18.2. No failure on the part of lifcare.in to enforce any part of these Terms and Conditions shall constitute a waiver of any of the Company’s rights under these Terms and Conditions, whether for past or future actions on the part of any person. Neither the receipt of any funds by the Company nor the reliance of any person on the Company actions shall be deemed to constitute a waiver of any part of these Terms and Conditions. Only a specific, written waiver signed by an authorised representative of the Company shall have any legal effect whatsoever.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsTitle}
          >
            19. INCONSISTENCY
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            19.1. In case of any inconsistency between the terms contained herein and any other communications or documents issued by the Company, these Terms and Conditions shall prevail.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsTitle}
          >
            20. ASSIGNMENT
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            20.1. You shall not assign Your rights or obligations under these Terms and Conditions to any person or entity without the prior written consent of the Company. The Company shall have the right to assign any of its rights and/or obligations to any person or entity without Your prior consent.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsTitle}
          >
            21. FORCE MAJEURE
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            21.1. The User accepts and acknowledges that the Company shall not be liable for any loss or damage caused to the User as a result of delay or default or deficiency or failure in the Services as a result of any natural disasters, fire, riots, civil disturbances, actions or decrees of governmental bodies, communication line failures (which are not caused due to the fault of the Company or the Third Party Pharmacies), or any other delay or default or deficiency or failure which arises from causes beyond the Company’s reasonable control ( “Force Majeure Event”). In the event of any Force Majeure Event arising, the Company, depending on whose performance has been impacted under the Terms and Conditions, shall immediately give notice to User of the facts which constitute the Force Majeure Event.
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsTitle}
          >
            22. GOVERNING LAW AND DISPUTE RESOLUTION
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.termsDescription}
          >
            22.1. These Terms and Conditions shall be governed by the laws of India. All disputes pertaining to, arising out of or in connection with the use of the Website by You shall be referred to arbitration by a sole arbitrator to be appointed by the mutual consent of Company and Yourself. The arbitration proceedings shall be conducted in accordance with the Arbitration and Conciliation Act, 1996, as amended or restated from time to time.  Any legal action or proceeding related to Other Party(s) access to, or use of, the Website or these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts at New Delhi. The seat and venue of arbitration shall be New Delhi and the language of arbitration shall be English.
          </Typography>
        </div>}
      />
    )
  }
}

export default withStyles(styles)(TermsAndCondition)
