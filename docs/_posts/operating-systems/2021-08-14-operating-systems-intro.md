---
layout: "content"
title:  "مقدمة"
categories: computer-science os
permalink: /:categories/:title.html
type: 'course'
---

<h3>
تنفيذ الاوامر في الانظمه المعتمدة على لينكس
</h3>

<p class="content-p">
<bdi>
اولا ما هو لينكس؟ <br />
لينكس (linux) هو نظام تشغيل حر م مفتوح المصدر
(Open Source)
يتمتع لينكس بدرجة عالية من الحرية في تعديل وتشغيل وتوزيع وتطوير أجزائه ويعتبر من الانظمه التي تنحدر من يونكس
(Unix)
</bdi>
</p>
<h3>

</h3>


<h3>
<bdi>
موجه الأوامر -
CLI
</bdi>
</h3>
<p class="content-p">
<bdi>
موجه الأوامر أو واجهة الأوامر
(Command Line Interface - CLI)
هو وسيلة الاتصال بين الأنسان و الحاسوب, اذ يمكن من خلالها اداء عمليات مختلفة على الحاسوب. <br />

تصدر الأوامر على أنظمة
Unix
عن طريق كتابة اسم الأمر بشكل مباشر في موجه الأوامر, &nbsp;
 يمكن للأوامر أن تأخذ وسائط
(arguments) و الخيارات(options) ، وفقًا للنمط:
</bdi>
</p>
<div class="terminal-box">
command &lt;options&gt; &lt;arguments&gt;
</div>

<h3>
<bdi>
استخدام مساعدة النظام - الأمر
man
</bdi>
</h3>

<p class="content-p">
<bdi>
في أنظمة يونكس  تتوفر مساعدة النظام في شكل مستندات نصية تصف مختلف جوانب النظام وأدواته. الوصول إليها يكون عن طريق الأمر -
man
و تستخدم كالتالي:
</bdi>
</p>
<div class="terminal-box">
man &lt;command&gt;
</div>

<p class="content-p">
<bdi>
بحيث
command
يكون اسم الأمر الذي يراد إظهار مساعدة النظام له, مثال:
</bdi>
</p>
<div class="terminal-box">
-&gt;man man
</div>

<p class="content-p">
<bdi>
تنفيذ الأمر السابق يؤدي إلى تشغيل المساعدة للأمر
man
كالتالي:
</bdi>  
</p>
<div class="content-image">
<img  src="/assets/img/os/os-intro1.png" alt="os intro photo 1"/>
</div>
<p class="content-p">
<bdi>
تنقسم صفحة المساعدة الى عدة أقسام تفصل التعليمات الواردة للأمر - فيما يلي قائمة بالأقسام الأكثر شيوعًا: <br>
&nbsp;&#9679;&nbsp;
الأسم
- NAME
اسم الأمر وتعليق قصير أو شرح <br>
&nbsp;&#9679;&nbsp;
الملخص
- SYNOPSIS
 طرق لتشغيل برنامج أو أمر بقائمة من المفاتيح الممكنة<br>
 &nbsp;&#9679;&nbsp;
 الوصف
 - DESCRIPTION
  وصف كامل للبرنامج ووصف مفصل للمفاتيح التي يمكن استخدامها <br>

  &nbsp;&#9679;&nbsp;
  المزيد
  - SEE ALSO
   نصائح للأوامر المشابهة أو ذات الصلة<br>
</bdi>
</p>

<p class="content-p">
وهذا بإختصار مقدمة سريعة و مختصرة عن موجه الأوامر في أنظمة يونكس
<a href="#">
اضغط هنا 
</a>
للإنتقال للدرس التالي
</p>
