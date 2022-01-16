---
layout: "detail"
categories: programming java
title:     "حلقات التكرار"
permalink: /:categories/:title.html
type: 'course'
---

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font size="4" style="font-size: 16pt"><b>حلقات
التكرار </b><b>:</b></font></p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><font color="#0d0d0d"><font size="4" style="font-size: 14pt"><span lang="ar-SY">تعمل
على تكرار تنفيذ مجموعة من التعليمات
البرمجية طالما الشرط محقق</span></font></font></span></font></p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font size="4" style="font-size: 14pt"> تعد
حلقات التكرار مفيدة لأنها توفر الوقت
,وتحد
من الأخطاء وتجعل الكود سهل القراءة </font></p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font size="4" style="font-size: 16pt"><b>حلقة
</b><font size="4" style="font-size: 16pt"><b>
while : </b></font></font>
</p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><font color="#0d0d0d"><font size="4" style="font-size: 16pt"><span lang="ar-SY">تنفذ
جميع التعليمات البرمجية مادام الشرط
محقق</span></font></font></span></font></p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font size="4" style="font-size: 16pt">مثال<font size="4" style="font-size: 16pt">:</font></font></p>

<div class="code-box">
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">int</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
i </font></font></font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">=</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">0</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">;</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">while</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">i
</font></font></font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">&lt;</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">5</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">)</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">System</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">out</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">println</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">i</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">);</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  <font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">i</font></font></font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">++</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">;</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font></font></font></p>
</div>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font size="4" style="font-size: 16pt"><b>حلقة
 </b><font size="4" style="font-size: 16pt"><b>do
while :</b></font></font></p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
سيتم
تنفيذ مجموعة التعليمات البرمجية مرة
واحدة قبل التحقق مما إذا كان الشرط محقق
ثم سيتم تكرار التعليمات طالما الشرط
محقق.</p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font color="#ff0000"><font size="4" style="font-size: 16pt">ملاحظة
<font size="4" style="font-size: 16pt">:</font></font></font></p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font size="3" style="font-size: 12pt">لا
تنسى زيادة المتغير المستخدم في الشرط
إلا فإن الحلقة لن تنتهي أبدا .</font></p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font color="#ff0000"><font size="4" style="font-size: 16pt">مثال :</font></font></p>

<div class="code-box">
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">int</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
i </font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">=</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">0</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">;</font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt"><br/>
do</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">System</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">out</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">println</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">i</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">);</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  <font face="Consolas, serif"><font size="3" style="font-size: 11pt">i</font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">++</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">;</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">while</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">i
</font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">&lt;</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">5</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">);</font></font></font></p>
</div>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<br/>
<br/>
</p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<br/>
<br/>
</p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><font size="4" style="font-size: 16pt"><span lang="ar-SY"><b>حلقة
</b></span></font></span></font><font face="Arial, serif"><font size="4" style="font-size: 16pt"><b>
for : </b></font></font>
</p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><font size="3" style="font-size: 11pt"><span lang="ar-SY">عندما
نعلم عدد مرات تكرار التعليمات البرمجية
نقوم باستخدام حلقة </span></font></span></font><font face="Arial, serif"><font size="3" style="font-size: 11pt">for
 </font></font><font face="Arial"><span lang="ar-SA"><font size="3" style="font-size: 11pt"><span lang="ar-SY">بدلا
من حلقة </span></font></span></font><font face="Arial, serif"><font size="3" style="font-size: 11pt">while</font></font></p>

<p style="margin-bottom: 0.11in; line-height: 0.23in; background: #ffffff">
for(&nbsp; تعريف
العداد;&nbsp; الشرط;
النقصان&nbsp; الزيادة
أو&nbsp; )<br/>
{<br/>
&nbsp;
&nbsp;&nbsp;مجموعة
التعليمات البرمجية<br/>
}</p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font color="#ff0000"><font size="4" style="font-size: 16pt">مثال :</font></font></p>

<div class="code-box">
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">for</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">int</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
i </font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">=</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">0</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">;</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
i </font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">&lt;</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">5</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">;</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
i</font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">++</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">)</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">System</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">out</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">println</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">i</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">);</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font></p>
</div>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font color="#ff0000"><font size="4" style="font-size: 16pt"> شرح المثال :</font></font></p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><font size="3" style="font-size: 11pt"><span lang="ar-SY">في
البداية قمنا بتعيين العداد واعطاءه قيمة
ابتدائية </span></font></span></font><font face="Arial, serif"><font size="3" style="font-size: 11pt">0
 </font></font><font face="Arial"><span lang="ar-SA"><font size="3" style="font-size: 11pt"><span lang="ar-SY">قبل
بدء الحلقة ثم قمنا بوضع شرط الحلقة </span></font></span></font><font face="Arial, serif"><font size="3" style="font-size: 11pt">i
</font></font><font face="Arial"><span lang="ar-SA"><font size="3" style="font-size: 11pt"><span lang="ar-SY">يجب
أن تكون أصغر تماما من </span></font></span></font><font face="Arial, serif"><font size="3" style="font-size: 11pt">5
 </font></font><font face="Arial"><span lang="ar-SA"><font size="3" style="font-size: 11pt"><span lang="ar-SY">إذا
كان الشرط محقق الحلقة ستبدأ </span></font></span></font><font face="Arial, serif"><font size="3" style="font-size: 11pt">,</font></font><font face="Arial"><span lang="ar-SA"><font size="3" style="font-size: 11pt"><span lang="ar-SY">اما
اذا كان الشرط غير محقق ستنتهي الحلقة
بعد ذلك قمنا بزيادة العداد بعد كل مرور</span></font></span></font></p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font color="#ff0000"><font size="4" style="font-size: 16pt"> اختبر نفسك :</font></font></p>

<div class="code-box">
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">int
</font></font></font><font color="#0d0d0d"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">i
</font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">=</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">1</font></font></font><font color="#bfbfbf"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">;</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#bfbfbf"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">____(</font></font></font><font color="#0d0d0d"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">i</font></font></font><font color="#808080"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">&lt;</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">6</font></font></font><font color="#bfbfbf"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">){</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">System</font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#0d0d0d"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">out</font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">println</font></font></font><font color="#bfbfbf"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">i</font></font></font><font color="#bfbfbf"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">);</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#808080"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">____;</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#808080"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font></p>
</div>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font color="#ff0000"><font size="4" style="font-size: 16pt"> اختبر نفسك :</font></font></p>

<div class="code-box">
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#808080"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">____(int
i=0;i&lt;4;___)</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#808080"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">System.out.println(__);</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#808080"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font></p>
</div>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font color="#0d0d0d"><font face="Courier New"><font size="3" style="font-size: 11pt"><b>تعليمة
</b></font></font></font><font size="3" style="font-size: 11pt"><b>
break :</b></font></p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
تستخدم
في الحلقات وفي جملة switch</p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
تقوم
هذه التعليمة بإيقاف الحلقة وتخرج منها
وتنتقل إلى الكود الذي يليه.</p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font color="#ff0000"><font size="4" style="font-size: 16pt"> مثال :</font></font></p>

<div class="code-box">
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">for</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">int</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
i </font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">=</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">0</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">;</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
i </font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">&lt;</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">10</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">;</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
i</font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">++</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">)</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">if</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">i
</font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">==</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">4</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">)</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">    </font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">break</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">;</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">System</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">out</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">println</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">i</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">);</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font></p>
</div>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Courier New"><font size="3" style="font-size: 11pt"><b>تعليمة
 </b></font></font><font size="3" style="font-size: 11pt"><b>continue:</b></font></p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><font color="#0d0d0d"><font size="3" style="font-size: 11pt"><span lang="ar-SY">تستخدم
لتجاوز تنفيذ مجموعة من التعليمات البرمجية
أي تتجاوز الدورة الحالية وتنتقل إلى
الدورة التي تليها فنجد عندما يتحقق الشرط
لن يتم تنفيذ التعليمات التي تليها ستعود
إلى شرط الحلقة وتتابع عملها</span></font></font></span></font></p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font color="#ff0000"><font size="4" style="font-size: 16pt"> مثال :</font></font></p>

<div class="code-box">
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">for</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">int</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
i </font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">=</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">0</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">;</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
i </font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">&lt;</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">10</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">;</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
i</font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">++</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">)</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">if</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">i
</font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">==</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">4</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">)</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">    </font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">continue</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">;</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">System</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">out</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">println</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">i</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">);</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font></p>
</div>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font color="#ff0000"><font size="4" style="font-size: 16pt"> اختبر نفسك :</font></font></p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><font color="#0d0d0d"><font face="Courier New"><font size="3" style="font-size: 11pt"><span lang="ar-SY">أوقف
الحلقة عند تحقق الشرط </span></font></font></font></span></font>
</p>

<div class="code-box">
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">for</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">int</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
i </font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">=</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">0</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">;</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
i </font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">&lt;</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">10</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">;</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
i</font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">++</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">)</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">if</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">i
</font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">==</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">4</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">)</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">    </font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">______</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">;</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">System</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">out</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">println</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">i</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">);</font></font></font></p>
</div>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<br/>
<br/>

</p>
<p style="margin-bottom: 0.11in; line-height: 108%"><br/>
<br/>

</p>
