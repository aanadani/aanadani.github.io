---
layout: "content"
categories: programming java
title:     "المصفوفات"
permalink: /:categories/:title.html
type: 'course'
---

<p dir="rtl" align="center" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><font color="#0d0d0d"><font size="5" style="font-size: 20pt"><span lang="ar-SY"><b>المصفوفات
</b></span></font></font></span></font>
</p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><font color="#0d0d0d"><font size="3" style="font-size: 11pt"><span lang="ar-SY">تعتبر
المصفوفات إحدى اهم بنى المعطيات الخطية
وذلك لأنها تقوم بتخزين مجموعة من العناصر
بشكل خطي ويجب على جميع العناصر أن تكون
من نوع واحد </span></font></font></span></font>
</p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><font color="#0d0d0d"><font size="3" style="font-size: 11pt"><span lang="ar-SY">لا
يمكن بأي طريقة تغير حجم المصفوفة او
نوعها بعد التصريح عنها ولكن يمكن تغيير
قيم العناصر الموجودة ضمنه </span></font></span></font><font face="Arial, serif"><font size="3" style="font-size: 11pt">.</font></font></font></p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><font color="#0d0d0d"><font size="3" style="font-size: 11pt"><span lang="ar-SY">بشكل
عام يوجد نوعين من المصفوفات </span></font></span></font><font face="Arial, serif"><font size="3" style="font-size: 11pt">:</font></font></font></p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font color="#0d0d0d"><font face="Arial, serif"><font size="3" style="font-size: 11pt">1</font></font></font><font color="#0d0d0d"><font face="Arial, serif"><font size="3" style="font-size: 11pt"><b>-</b></font></font><font face="Arial"><span lang="ar-SA"><font size="3" style="font-size: 11pt"><span lang="ar-SY"><b>مصفوفة
أحادية </b></span></font></span></font><font face="Arial, serif"><font size="3" style="font-size: 11pt"><b>:
</b></font></font></font>
</p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><font color="#0d0d0d"><font size="3" style="font-size: 11pt"><span lang="ar-SY">تسمح
المصفوفة الأحادية بتعريف عدة عناصر تحت
اسم معين ويتم التعامل مع جميع هذه العناصر
من خلال هذا الاسم متبوعا بدليل العنصر
ضمن المصفوفة</span></font></font></span></font></p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><font color="#0d0d0d"><font size="3" style="font-size: 11pt"><span lang="ar-SY">لتعريف
مصفوفة أحادية</span></font></font><font color="#000000"><span style="background: #e7e9eb"><font size="4" style="font-size: 14pt"><span lang="ar-SY"><b>
</b></span></font></span></font></span></font>
</p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">int</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
[] </font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">array</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">;</font></font></font></font></font></p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><font color="#0d0d0d"><font size="3" style="font-size: 11pt"><span lang="ar-SY">يمكن
اسناد قيم بدائية إلى عناصر المصفوفة عند
التصريح عنها كما يلي </span></font></span></font><font face="Arial, serif"><font size="3" style="font-size: 11pt">:</font></font></font></p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<br/>
<br/>

</p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">int</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
[] </font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">array</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">={</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">value1,value2,value3</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">};</font></font></font></font></font></p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<br/>
<br/>

</p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><font color="#0d0d0d"><font size="3" style="font-size: 11pt"><span lang="ar-SY">يمكن
تحديد حجم المصفوفة عند التصريح عنها </span></font></span></font><font face="Arial, serif"><font size="3" style="font-size: 11pt">:</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">int</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
[] </font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">array</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">=</font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">new</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">int</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">[</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">5</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">];</font></font></font></font></font></p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<br/>
<br/>

</p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><font color="#0d0d0d"><font size="3" style="font-size: 11pt"><span lang="ar-SY">يمكن
الوصول إلى أي عنصر في المصفوفة من خلال</span></font></font><font color="#000000"><span style="background: #e7e9eb"><font size="3" style="font-size: 11pt"><span lang="ar-SY">
</span></font></span></font></span></font><font color="#0d0d0d"><font face="Arial, serif"><font size="3" style="font-size: 11pt">index</font></font></font></p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><font color="#0d0d0d"><font size="3" style="font-size: 11pt"><span lang="ar-SY">يتم
تخزين العناصر في المصفوفة إبتداءا من
أول عنصر رقم </span></font></span></font><font face="Arial, serif"><font size="3" style="font-size: 11pt">0
 index=</font></font><font face="Arial"><span lang="ar-SA"><font size="3" style="font-size: 11pt"><span lang="ar-SY">الى
</span></font></span></font><font face="Arial, serif"><font size="3" style="font-size: 11pt">index=length-1</font></font></font></p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><font color="#0d0d0d"><font face="Courier New"><font size="3" style="font-size: 11pt"><span lang="ar-SY"><b>أي
ان العنصر الأول في المصفوفة يحمل </b></span></font></font></span></font><font face="Consolas, serif"><font size="3" style="font-size: 11pt"><b>0
 index=</b></font></font><font face="Arial"><span lang="ar-SA"><font face="Courier New"><font size="3" style="font-size: 11pt"><span lang="ar-SY"><b>والعنصر
الأخير فيها يحمل </b></span></font></font></span></font><font face="Consolas, serif"><font size="3" style="font-size: 11pt"><b>index=length-1</b></font></font></font></p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><font color="#000000"><span style="background: #e7e9eb"><font size="3" style="font-size: 11pt"><span lang="ar-SY">مثال</span></font></span></font><font face="Verdana, serif"><font size="3" style="font-size: 11pt">:</span></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">int</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">[]</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
myNum </font></font></font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">=</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">10</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">,</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">20</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">,</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">30</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">,</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">40</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">};</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">System</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">out</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">println</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">myNum
</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">[</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">0</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">]);</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#708090"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">//
Outputs 10</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<br/>
<br/>

</p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><font color="#0d0d0d"><font face="Courier New"><font size="3" style="font-size: 11pt"><span lang="ar-SY"><b>يمكن
إعطاء قيمة إلى احد عناصر المصفوفة </b></span></font></font></span></font><font face="Consolas, serif"><font size="3" style="font-size: 11pt"><b>:</b></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000"> <font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">myNum
</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">[2]</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">=</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
 </font></font></font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">40;</font></font></font></font></font></p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><font color="#0d0d0d"><font face="Courier New"><font size="3" style="font-size: 11pt"><span lang="ar-SY"><b>لمعرفة
عدد عناصر المصفوفة يمكن استخدام الخاصية
</b></span></font></font></span></font><font face="Consolas, serif"><font size="3" style="font-size: 11pt"><b>length</b></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">String</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">[]</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
cars </font></font></font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">=</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font><font color="#669900"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">&quot;Volvo&quot;</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">,</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#669900"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">&quot;BMW&quot;</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">,</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#669900"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">&quot;Ford&quot;</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">,</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#669900"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">&quot;Mazda&quot;</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">};</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">System</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">out</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">println</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">cars</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">length</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">);</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#708090"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">//
Outputs 4</font></font></font></font></font></p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA">يمكن استخدام حلقة
</span></font>for  <font face="Arial"><span lang="ar-SA"><span lang="ar-SY">واستخدام
خاصية </span></span></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt"><b>length</b></font></font></font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font><font face="Arial"><span lang="ar-SA"><font face="Courier New"><font size="2" style="font-size: 10pt"><font size="3" style="font-size: 11pt">لتحديد
عدد دورات الحلقة فيمكن البحث عن عنصر في
المصفوفة أو طباعة عناصر المصفوفة </font></font></font></font></span></font>
</p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><font face="Courier New"><font size="2" style="font-size: 10pt"><font color="#ff0000"><font size="3" style="font-size: 11pt"><b>مثال
</b></font></font></font></span></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font face="Consolas, serif"><font size="3" style="font-size: 11pt"><b>:</b></font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">String</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">[]</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
cars </font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">=</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font><font color="#669900"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">&quot;Volvo&quot;</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">,</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#669900"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">&quot;BMW&quot;</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">,</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#669900"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">&quot;Ford&quot;</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">,</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#669900"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">&quot;Mazda&quot;</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">};</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">for</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">int</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
i </font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">=</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">0</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">;</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
i </font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">&lt;</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
cars</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">length</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">;</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
i</font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">++</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">)</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">System</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">out</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">println</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">cars</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">[</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">i</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">]);</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font></p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<br/>
<br/>

</p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
2<b>-</b><font face="Arial"><span lang="ar-SA"><b>مصفوفة
ثنائية</b></span></font><b>:</b> 
</p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA">يمكن اعتبار المصفوفة
متعددة الأبعاد على أنها مصفوفة مصفوفات
</span></font>
</p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><span lang="ar-SY">لتعريف
مصفوفة ثنائية </span></span></font>:</p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">int</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">[][]</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
myNumbers </font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">=</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">1</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">,</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">2</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">,</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">3</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">,</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">4</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">},</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">5</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">,</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">6</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">,</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">7</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">};</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<br/>
<br/>

</p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><span lang="ar-SY">لاحظ
أننا نكتب عدد أسطر المصفوفة أولا ثم عدد
أعمدتها </span></span></font>,</p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><span lang="ar-SY">للوصول
الى احد العناصر في المصفوفة نحدد رقم
السطر والعامود للعنصر المراد البحث عنه
في هذا المثال قمنا بتحديد  العنصر الذي
يقع في السطر الأول والعامود الثاني</span></span></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">int</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">[][]</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
myNumbers </font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">=</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">1</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">,</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">2</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">,</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">3</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">,</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">4</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">},</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">5</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">,</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">6</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">,</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">7</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">};</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">int</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
x </font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">=</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
myNumbers</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">[</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">1</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">][</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">2</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">];</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">System</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">out</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">println</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">x</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">);</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#708090"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">//
Outputs 7</font></font></font></p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><span lang="ar-SY">يمكننا
استخدام حلقة </span></span></font>for  <font face="Arial"><span lang="ar-SA"><span lang="ar-SY">بداخل
حلقة </span></span></font>for  <font face="Arial"><span lang="ar-SA"><span lang="ar-SY">أخرى
للوصول الى العناصر وطباعتها </span></span></font>
</p>
<p style="margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">public</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">class</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">Main</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">public</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">static</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">void</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">main</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">String</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">[]</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
args</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">)</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">    </font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">int</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">[][]</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
myNumbers </font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">=</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">1</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">,</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">2</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">,</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">3</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">,</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">4</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">},</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">5</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">,</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">6</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">,</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">7</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">};</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">    </font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">for</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">int</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
i </font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">=</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">0</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">;</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
i </font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">&lt;</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
myNumbers</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">length</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">;</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">++</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">i</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">)</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">      </font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">for</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">int</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
j </font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">=</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">0</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">;</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
j </font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">&lt;</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
myNumbers</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">[</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">i</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">].</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">length</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">;</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">++</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">j</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">)</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">        </font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">System</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">out</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">println</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">myNumbers</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">[</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">i</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">][</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">j</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">]);</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">      </font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt"><br/>

   </font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font></p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<br/>
<br/>

</p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<br/>
<br/>

</p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<br/>
<br/>

</p>
