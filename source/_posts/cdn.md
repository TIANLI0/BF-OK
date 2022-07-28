---
title: 免费jsd镜像使用手册（无需申请）
date: 2022-01-26 14:36:24
updated: 2022-02-02 14:55:24
tags: jsd
cover: https://img1.tianli0.top/jsd/jsd1.png
---



# 免费JSD镜像使用手册(求打赏)

1. 如何使用？将你的jsd链接换为cdn1.tianli0.top即可

   您在使用前最好填写申请问卷https://wj.qq.com/s2/9657320/0bae 在网站关于页面或者底部添加**JSD加速由Tianli提供**（无需使用超链接）`注意：如果您在我的友链页面，您无需填写问卷，只需留言`

2. 有使用限制吗？有，使用限制请查看[CDN政策| Tianli's blog (tianli-blog.club)](https://tianli-blog.club/2022/01/26/cdn/#CDN政策)和https://tianli-blog.club/privacy

3. 速度快吗？依托腾讯云全国cdn，并通过腾讯云COS转存，保证速度![](https://cdn.jsdelivr.net/www.jsdelivr.com/35507da1d543c7874252e26e5dd65f505d0f6241/img/network/infographics.png?v=35507da1d543c7874252e26e5dd65f505d0f6241c)类似于jsd的S3转存，只是依托腾讯云为服务

4. 使用时被302到了fastly.jsd？因为缓存需要一定的时间，且可能腾讯IP被jsd cdn提供商ban掉，所以第一次访问会302重定向，保证用户体验，当COS中缓存完毕后下一次CDN会自动命中COS，同时COS会刷新全网节点。

5. 为什么我jsd文件更新了，cdn1.tianli0.top却没有更新？为保证用户使用体验以及降低费用，COS会以90天为单位删除缓存文件。所以不建议不加版本号使用，我们建议您访问时带上版本号，尽可能的保证您的信息及时更新。

6. 遇到了跨域问题（F12时提示CORS）？请发送邮件到wutianli@tiani0.top报告问题。（不要选用境外邮箱，可能被加到垃圾邮件）

7. 为什么有的东西我没有开压缩，访问却被压缩处理？已开启以下功能

   ### Webp自适应

   开启Webp压缩后，CDN侧将对满足压缩规则的请求图片自动进行Webp压缩。此功能对原图有限制，详情参见 [图片优化-Webp自适应](https://cloud.tencent.com/document/product/228/43121)

   ### Guetzli自适应

   开启Guetzli压缩后，CDN侧将对满足压缩规则的请求图片自动进行Guetzli压缩。 [什么是Guetzli自适应？](https://cloud.tencent.com/document/product/228/43121)

   ### TPG自适应

   开启TPG压缩后，CDN侧将对满足压缩规则的请求图片自动进行TPG压缩。 [什么是TPG自适应？](https://cloud.tencent.com/document/product/228/43121)

   ### HTTP 2.0配置

   您需要先配置HTTPS证书才可开启此项配置。 [什么是HTTP 2.0？](https://cloud.tencent.com/document/product/228/41689)

   ### 强制跳转

   根据配置将用户访问强制跳转为 Https 或 Http。 [什么是 Https 强制跳转？](https://cloud.tencent.com/document/product/228/41688)

   Http->Https

   ### HSTS配置

   根据需求开启 HSTS 配置，开启后 CDN 响应增加 Strict-Transport-Security 头部。 [什么是 HSTS 配置？](https://cloud.tencent.com/document/product/228/44867)

   ### TLS版本配置

   CDN默认开启TLS 1.0/1.1/1.2 ，您可按需关闭/开启指定TLS版本。 [什么是 TLS 版本配置？](https://cloud.tencent.com/document/product/228/44868)

   TLS 1.0未开启TLS 1.1已开启TLS 1.2已开启TLS 1.3已开启

   ### OCSP装订配置

   您需要先配置HTTPS证书才可开启此项配置。 [什么是OCSP装订？](https://cloud.tencent.com/document/product/228/41690)

   ### 智能压缩

   开启智能压缩服务，节省传输流量。 [什么是智能压缩？](https://cloud.tencent.com/document/product/228/41736)

8. MORE？ 请评论区留言



# CDN政策

**CDN免费开放，但是您需悉知以下内容**

1. 不得用于违法违规场景的网站加速（包括但不限于GHS/薅羊毛/有损国家形象等）。违规后该网站主体会进入黑名单。

2. 服务器将自动对缓存资源进行自检，如果您的缓存文件存在违规信息，服务器将自动审核并封锁，封锁后请勿发送邮件申诉。

3. 使用即代表你同意JSD相关隐私政策。

   # Acceptable Use Policy

   *Effective date: February 17, 2021*

   Prospect One ("us", "we", or "our") operates the cdn.jsdelivr.net website (the "Service" or "jsDelivr").

   By using jsDelivr, you agree to follow this Acceptable Use Policy (the "Policy"). If you are found to be in violation of the Policy at any time, as determined by Prospect One in its sole discretion, we may warn you, prevent you from using our Service, or take any other action we deem appropriate. Please note that we may change our Acceptable Use Policy at any time, and it is your responsibility to keep up-to-date with and adhere to the Policy posted here.

   ## 1. Permitted Use

   jsDelivr works as a CDN for content already stored on npm, GitHub, and other third-party services. These services are not operated by us, and each of them has its own terms of use. Any content accessed via jsDelivr must conform to the terms of the service from which it was retrieved. For example, when you use jsDelivr as a CDN for GitHub, the content must conform to all GitHub's policies. Additionally, any content accessed via jsDelivr must conform to our own policies as described in this document.

   As long as you do not violate our rules:

   - using jsDelivr is free for both personal and commercial use,
   - there are no limits on bandwidth or number of requests,
   - we will provide a reasonable level of support via GitHub issues and email for urgent and private matters.

   ## 2. Hard Limits and Restrictions

   To maintain the performance and security of our Service, we have various limits and restrictions in place. These may include but are not limited to:

   - maximum size of a single file,
   - maximum number of files in a single package,
   - maximum size of a single package,
   - blocking of certain file extensions.

   When requesting a resource that does not meet these limits, you will get an error response indicating the reason. The limits are set considerably higher than needed for most projects and may be further increased or removed for legitimate projects on request.

   ## 3. Soft Limits and Recommendations

   These limits are not automatically enforced by our Service, but you agree not to exceed them:

   1. For projects using our GitHub proxy:
      - We recommend that the number of actively accessed files per repository does not exceed 10 000. If you have considerably more files, a custom proxy endpoint for your project may be a better fit.
      - The soft limit for the number of files per repository is 100 000.

   ## 4. Prohibited Use

   The following behavior is prohibited:

   1. Hosting or accessing content that:

      - contains malware or harmful code in any form,
      - violates proprietary rights of others,
      - is sexually explicit,
      - is potentially illegal in the EU or the USA.

   2. Abusing the service and its resources, or using jsDelivr as a general-purpose file or media hosting service. This includes, for example:

      - running an image hosting website and using jsDelivr as a storage for all uploaded images,
      - hosting videos, file backups, or other files in large quantities.

      We recognize that there are legitimate projects that consist of a large number of files, and these are not considered abuse. For example: icons packs, apps, or games with a large number of assets.

   3. Trying to bypass our limits or restrictions in any way. We will be happy to remove limits or provide custom solutions for legitimate projects.

   ## 5. Additional Restrictions in China

   jsDelivr holds an ICP license issued by the Chinese government, which allows us to operate infrastructure directly in Mainland China. To keep this license and allow our Chinese users to benefit from the performance improvements it provides, any content served via our Chinese network must conform to Chinese policies. Content potentially violating Chinese policies may be blocked in China without warning.

   ## 6. Limitation of Liability

   In no event will the Prospect One and/or jsDelivr entities be liable to you or any third party for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or relating to your access to or use of, or your inability to access or use, the websites and online services or any materials or content on the websites and online services, whether based on warranty, contract, tort (including negligence), statute, or any other legal theory, whether or not the Prospect One and/or jsDelivr entities have been informed of the possibility of such damage.

   ## 7. Contact Us

   If you have any questions about this Acceptable Use Policy, please contact us:

   By email: [dak@prospectone.io](mailto:dak@prospectone.io)

   # Privacy Policy - cdn.jsdelivr.net

   *Effective date: September 14, 2021*

   Prospect One ("us", "we", or "our") operates the cdn.jsdelivr.net website (the "Service").

   This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.

   We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.

   ## Definitions

   #### Personal Data

   Personal Data means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possession).

   #### Usage Data

   Usage Data is data collected automatically either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).

   #### Cookies

   Cookies are small pieces of data stored on a User’s device.

   #### Data Controller

   Data Controller means a person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any personal data are, or are to be, processed.

   For the purpose of this Privacy Policy, we are a Data Controller of your data.

   #### Data Processor (or Service Providers)

   Data Processor (or Service Provider) means any person (other than an employee of the Data Controller) who processes the data on behalf of the Data Controller.

   We may use the services of various Service Providers in order to process your data more effectively.

   #### Data Subject

   Data Subject is any living individual who is the subject of Personal Data.

   #### User

   The User is the individual using our Service. The User corresponds to the Data Subject, who is the subject of Personal Data.

   ## Information Collection And Use

   We collect several different types of information for various purposes to provide and improve our Service to you.

   ### Personal Data

   While using our Service, we will not ask you to provide any personal data. cdn.jsdelivr.net does not require or collect any personal data.

   ### Usage Data

   We may collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.

   ### Location Data

   We do not use or store information about your location (“Location Data”).

   ### Tracking & Cookies Data

   We do not use cookies or similar tracking technologies to track your activity on our Service.

   ## Use of Data

   Prospect One uses the collected data for various purposes:

   - To provide and maintain our Service
   - To notify you about changes to our Service
   - To allow you to participate in interactive features of our Service when you choose to do so
   - To provide customer support
   - To gather analysis or valuable information so that we can improve our Service
   - To monitor the usage of our Service
   - To detect, prevent and address technical issues

   ## Retention of Data

   Prospect One will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.

   Prospect One will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer time periods.

   ## Transfer Of Data

   Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.

   If you are located outside Poland and choose to provide information to us, please note that we transfer the data, including Personal Data, to Poland and process it there.

   Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.

   Prospect One will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.

   ## Disclosure Of Data

   ### Disclosure for Law Enforcement

   Under certain circumstances, Prospect One may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).

   ### Legal Requirements

   Prospect One may disclose your Personal Data in the good faith belief that such action is necessary to:

   - To comply with a legal obligation
   - To protect and defend the rights or property of Prospect One
   - To prevent or investigate possible wrongdoing in connection with the Service
   - To protect the personal safety of users of the Service or the public
   - To protect against legal liability

   ## Security Of Data

   The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.

   ## "Do Not Track" Signals

   We do not support Do Not Track ("DNT"). Do Not Track is a preference you can set in your web browser to inform websites that you do not want to be tracked.

   You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser.

   ## Your Rights

   Prospect One aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.

   If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please contact us.

   In certain circumstances, you have the right:

   - To access and receive a copy of the Personal Data we hold about you
   - To rectify any Personal Data held about you that is inaccurate
   - To request the deletion of Personal Data held about you
   - You have the right to data portability for the information you provide to Prospect One. You can request to obtain a copy of your Personal Data in a commonly used electronic format so that you can manage and move it.

   Please note that we may ask you to verify your identity before responding to such requests.

   ## Service Providers

   We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.

   These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.

   ### Content Delivery

   We use third-party Service Providers to serve all of our traffic under the domain cdn.jsdelivr.net. This means all of these providers have access to your IP address and other information sent by your web browser. This information is used for analytics and security purposes. Neither we nor our providers track any individual user.

   #### Cloudflare

   For more information on the privacy practices of Cloudflare, please visit the following web page:
   https://www.cloudflare.com/security-policy/

   #### Fastly

   For more information on the privacy practices of Fastly, please visit the following web page:
   https://www.fastly.com/privacy

   #### Bunny

   For more information on the privacy practices of Bunny CDN, please visit the following web page:
   https://bunny.net/privacy

   #### Quantil (China residents only)

   We only use Quantil to serve users located in China. For more information on the privacy practices of Quantil, please visit the following web page:
   https://www.quantil.com/privacy-and-security-policy/

   ## Links To Other Sites

   Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.

   We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.

   ## Children's Privacy

   Our Service does not address anyone under the age of 13 ("Children").

   We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.

   ## Changes To This Privacy Policy

   We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.

   We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.

   You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.

   ## Contact Us

   If you have any questions about this Privacy Policy, please contact us:

   By email: [dak@prospectone.io](mailto:dak@prospectone.io)

# [CDN状态](https://tiani-blog.club/cdn/index.html)

{% btn 'https://tianli-blog.club/cdn/index.html',CDN状态,far fa-hand-point-right,pink larger %}

