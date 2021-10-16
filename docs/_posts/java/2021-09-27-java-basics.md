---
layout: "content"
categories: programming java
title:     "اساسيات في الجافا"
permalink: /:categories/:title.html
type: 'course'
---

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><font size="4" style="font-size: 14pt"><b>إنشاء
أول برنامج في جافا </b></font></font><font size="4" style="font-size: 14pt; direction:rtl;"><b>:</b></font>
</p>
<div class="code-box">
<p>
  <font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">public</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
  </font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">class</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
  </font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">Main</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
  </font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font>
</p>
<p>
  <font color="#000000">  </font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">&nbsp;&nbsp;public</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
  </font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">static</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
  </font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">void</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
  </font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">main</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">String</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">[]</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
  args</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">)</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
  </font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font>
</p>
<p>
  <font color="#000000">    </font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">&nbsp;&nbsp;&nbsp;&nbsp;System</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">out</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">println</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#669900"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">&quot;Hello
  World&quot;</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">);</font></font></font>
</p>
<p>
  <font color="#000000"></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">&nbsp;&nbsp;}</font></font></font>
</p>
<p>
  <font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font>
</p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<br/>
</p>
</div>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><font size="4" style="font-size: 14pt">لنقوم
الان بشرح الكود السابق نلاحظ أن  </font><font size="4" style="font-size: 14pt">ا</font><font size="4" style="font-size: 14pt">ي
كود في لغة الجافا يكون ضمن صف وفي مثالنا
هذا فإن اسم الصف هو </font></font><font size="4" style="font-size: 14pt">Main
 </font><font face="Arial"><font size="4" style="font-size: 14pt">وقد
يحوي برنامجك  الفعلي على صف واحد او عدد
من الصفوف </font></font><font size="4" style="font-size: 14pt">,</font><font face="Arial"><font size="4" style="font-size: 14pt">في
السطر الثاني نجد  الكلمة   </font></font><font size="4" style="font-size: 14pt">main</font><font face="Arial"><font size="4" style="font-size: 14pt">وهي
تدل على أن هذه الطريقة </font></font><font size="4" style="font-size: 14pt">(</font><font face="Arial"><font size="4" style="font-size: 14pt">التابع</font></font><font size="4" style="font-size: 14pt">)
</font><font face="Arial"><font size="4" style="font-size: 14pt">هو
تابع رئيسي ضمن هذا الصف  أي يبدأ التنفيذ
منها وليس من الضروري أن يعرف كل صف طريقة
رئيسية </font></font><font size="4" style="font-size: 14pt">,</font><font face="Arial"><font size="4" style="font-size: 14pt">وفي
هذه الحالة يصبح غير قابل للتنفيذ لوحده
ولكن يمكن استخدامه من خلال تمرير التحكم
إليه من صف رئيسي ليس من الضروري ان تفهم
 العبارات المكتوبة قبل وبعد  </font></font><font size="4" style="font-size: 14pt">main</font><font face="Arial"><font size="4" style="font-size: 14pt">ستتعلم
كل شيء من خلال  قراءة هذه السلسلة </font></font><font size="4" style="font-size: 14pt">.</font>
</p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
  <font face="Arial">

      <font color="#ff0000">
        <font size="5" style="font-size: 18pt">
        <b>ملاحظات
        </b>
        </font>

  </font>
  <font size="5" style="font-size: 18pt">
    <b>:</b>
  </font>
</font>

</p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
 <font face="Arial"><font size="4" style="font-size: 14pt">يجب
أن يبدأ اسم ال</font><font size="4" style="font-size: 14pt">صف</font><font size="4" style="font-size: 14pt">
دائما بحرف كبير</font></font>
</p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><font size="4" style="font-size: 14pt">تعتبر
لغة الجافا حساسة لحالة الأحرف</font></font><font size="4" style="font-size: 14pt">(</font><font color="#000000"><font face="Verdana, serif"><font size="4" style="font-size: 14pt"><span style="background: #ffffff">case-sensitive)</span></font></font></font><font size="4" style="font-size: 14pt">
</font><font face="Arial"><font size="4" style="font-size: 14pt">أي
أن </font></font><font size="4" style="font-size: 14pt">&quot;myclass</font><font size="4" style="font-size: 14pt">&quot;
</font><font face="Arial"><font size="4" style="font-size: 14pt">تختلف
عن </font></font><font size="4" style="font-size: 14pt">&quot;MyClass&quot;</font>
</p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
 <font face="Arial"><font size="4" style="font-size: 14pt">يجب
 أن يطابق  اسم الملف تماما اسم الصف وإلا
لن يستطيع مترجم لغة الجافا </font></font><font size="4" style="font-size: 14pt">(javac)
</font><font face="Arial"><font size="4" style="font-size: 14pt">الذي
يحول الكود الذي قمنا بكتابته إلى اللغة
التي يفهمها الحاسوب من إيجاد الصف لإنه
يبحث عن الملف أولا ثم يتوقع أن يكون الصف
يحمل نفس الاسم الأمر الذي قد يسبب مشاكل
في الكود </font></font><font size="4" style="font-size: 14pt">.</font>
</p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><font size="4" style="font-size: 14pt">كل
تعليمة في لغة جافا يجب أن تنتهي بفاصلة
منقوطة </font></font>

</p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><font size="4" style="font-size: 14pt">تشير
الأقواس  </font></font><font size="4" style="font-size: 14pt">{}</font><font face="Arial"><font size="4" style="font-size: 14pt">إلى
بداية ونهاية مجموعة من التعليمات البرمجية
والتي ندعوها   </font></font><font size="4" style="font-size: 14pt">block
</font>

</p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><font size="4" style="font-size: 16pt"><b>تعليمة
الطباعة </b></font></font><font size="4" style="font-size: 16pt"><b>:</b></font>
</p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt"><b>System</b></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt"><b>.</b></font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt"><b>out</b></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt"><b>.</b></font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt"><b>println(……);</b></font></font></font>
</p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><font size="4" style="font-size: 14pt">تقوم
بطباعة القيم الموجودة ضمن قوسين على
الشاشة وتنقل المؤشر إلى السطر التالي
بعد عملية الطباعة </font></font><font size="4" style="font-size: 14pt">.</font>
</p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><font size="4" style="font-size: 14pt">إذا
أردنا أن يبقى المؤشر في نفس السطر يمكن
كتابة التعليمة الأتية </font></font><font size="4" style="font-size: 14pt">:</font>
</p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt"><b>System</b></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt"><b>.</b></font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt"><b>out</b></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt"><b>.</b></font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt"><b>print(……);</b></font></font></font>
</p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><font size="4" style="font-size: 14pt"><b>الإدخال
في جافا</b></font></font><font size="4" style="font-size: 14pt"><b>:</b></font>
</p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><font size="3" style="font-size: 12pt">يوجد
كلاس اسمه </font></font><font size="3" style="font-size: 12pt">Scanner
</font><font face="Arial"><font size="3" style="font-size: 12pt">يستخدم
لإدخال البيانات من المستخدم ويوجد ضمن
</font></font><font size="3" style="font-size: 12pt">package
</font><font face="Arial"><font size="3" style="font-size: 12pt">اسمها
</font></font><font color="#dc143c"><font face="Consolas, serif"><font size="3" style="font-size: 12pt">java.util</font></font></font>
</p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><font color="#0d0d0d"><font size="3" style="font-size: 12pt">لاستخدام
هذا الصف نقوم بإنشاء كائن ونستدعي أي
طريقة توجد ضمن هذا الصف في مثالنا هذا
قمنا باستخدام </font></font><font face="Consolas, serif"><font size="3" style="font-size: 12pt">nextline()</font></font></font><font color="#0d0d0d"><font face="Consolas, serif"><font size="3" style="font-size: 12pt">
</font></font><font face="Arial"><font size="3" style="font-size: 12pt">التي
تستخدم لإدخال نص </font></font></font>

</p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">import</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">java</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">util</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">Scanner</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">;</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
 </font></font></font></font></font><font color="#708090"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">//
Import the Scanner class</font></font></font></font></font>
</p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<br/>
<br/>


</p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">class</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">Main</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font></font></font>
</p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">public</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">static</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">void</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">main</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">String</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">[]</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
args</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">)</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font></font></font>
</p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">    </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">Scanner</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
myObj </font></font></font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">=</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">new</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">Scanner</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">System</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">in</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">);</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
 </font></font></font></font></font><font color="#708090"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">//
Create a Scanner object</font></font></font></font></font>
</p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">    </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">System</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">out</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">println</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#669900"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">&quot;Enter
username&quot;</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">);</font></font></font></font></font>
</p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<br/>
<br/>


</p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">    </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">String</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
userName </font></font></font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">=</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
myObj</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">nextLine</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">();</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
 </font></font></font></font></font><font color="#708090"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">//
Read user input</font></font></font></font></font>
</p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">    </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">System</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">out</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">println</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#669900"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">&quot;Username
is: &quot;</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">+</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
userName</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">);</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
 </font></font></font></font></font><font color="#708090"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">//
Output user input</font></font></font></font></font>
</p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font></font></font>
</p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-left: 3.00pt solid #04aa6d; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font></font></font>
</p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><font color="#0d0d0d"><font size="4" style="font-size: 14pt"><b>يعرض
الجدول الاتي الدوال المستخدمة في إدخال
الأنواع الأخرى من البيانات </b></font></font></font>

</p>
<table dir="rtl" width="575" cellpadding="7" cellspacing="0">
	<col width="273"/>

	<col width="273"/>

	<tr valign="top">
		<td width="273" style="border: 1px solid #000000; padding: 0in 0.08in"><p align="right">
			<font face="Arial"><font color="#0d0d0d"><font size="4" style="font-size: 14pt"><b>اسم
			الدالة</b></font></font></font>
</p>
		</td>
		<td width="273" style="border: 1px solid #000000; padding: 0in 0.08in"><p align="right">
			<font face="Arial"><font color="#0d0d0d"><font size="4" style="font-size: 14pt"><b>الشرح</b></font></font></font>
</p>
		</td>
	</tr>
	<tr valign="top">
		<td width="273" style="border: 1px solid #000000; padding: 0in 0.08in"><p align="center">
			<font color="#0d0d0d"><font face="Consolas, serif">nextBoolean()</font></font>
</p>
		</td>
		<td width="273" style="border: 1px solid #000000; padding: 0in 0.08in"><p align="right">
			<font face="Arial"><font color="#0d0d0d"><font size="4" style="font-size: 14pt">تستخدم
			لإدخال بيانات من نوع </font></font><font size="4" style="font-size: 14pt">Boolean</font></font>
</p>
		</td>
	</tr>
	<tr valign="top">
		<td width="273" style="border: 1px solid #000000; padding: 0in 0.08in"><p align="center">
			<font color="#0d0d0d"><font face="Consolas, serif">nextByte()</font></font>
</p>
		</td>
		<td width="273" style="border: 1px solid #000000; padding: 0in 0.08in"><p align="right">
			<font face="Arial"><font color="#0d0d0d"><font size="4" style="font-size: 14pt">تستخدم
			لإدخال بيانات من نوع </font></font><font size="4" style="font-size: 14pt">byte</font></font>
</p>
		</td>
	</tr>
	<tr valign="top">
		<td width="273" style="border: 1px solid #000000; padding: 0in 0.08in"><p align="center">
			<font color="#0d0d0d"><font face="Consolas, serif">nextDouble()</font></font>
</p>
		</td>
		<td width="273" style="border: 1px solid #000000; padding: 0in 0.08in"><p align="right">
			<font face="Arial"><font color="#0d0d0d"><font size="4" style="font-size: 14pt">تستخدم
			لإدخال بيانات من نوع </font></font><font size="4" style="font-size: 14pt">double</font></font>
</p>
		</td>
	</tr>
	<tr valign="top">
		<td width="273" style="border: 1px solid #000000; padding: 0in 0.08in"><p align="center">
			<font color="#0d0d0d"><font face="Consolas, serif">nextFloat()</font></font>
</p>
		</td>
		<td width="273" style="border: 1px solid #000000; padding: 0in 0.08in"><p align="right">
			<font face="Arial"><font color="#0d0d0d"><font size="4" style="font-size: 14pt">تستخدم
			لإدخال بيانات من نوع </font></font><font size="4" style="font-size: 14pt">float</font></font>
</p>
		</td>
	</tr>
	<tr valign="top">
		<td width="273" style="border: 1px solid #000000; padding: 0in 0.08in"><p align="center">
			<font color="#0d0d0d"><font face="Consolas, serif">nextInt()</font></font>
</p>
		</td>
		<td width="273" style="border: 1px solid #000000; padding: 0in 0.08in"><p align="right">
			<font face="Arial"><font color="#0d0d0d"><font size="4" style="font-size: 14pt">تستخدم
			لإدخال بيانات من نوع </font></font><font size="4" style="font-size: 14pt">int</font></font>
</p>
		</td>
	</tr>
	<tr valign="top">
		<td width="273" style="border: 1px solid #000000; padding: 0in 0.08in"><p align="center">
			<font color="#0d0d0d"><font face="Consolas, serif">nextLine()</font></font>
</p>
		</td>
		<td width="273" style="border: 1px solid #000000; padding: 0in 0.08in"><p align="right">
			<font face="Arial"><font color="#0d0d0d"><font size="4" style="font-size: 14pt">تستخدم
			لإدخال بيانات من نوع </font></font><font size="4" style="font-size: 14pt">string</font></font>
</p>
		</td>
	</tr>
	<tr valign="top">
		<td width="273" style="border: 1px solid #000000; padding: 0in 0.08in"><p align="center">
			<font color="#0d0d0d"><font face="Consolas, serif">nextLong()</font></font>
</p>
		</td>
		<td width="273" style="border: 1px solid #000000; padding: 0in 0.08in"><p align="right">
			<font face="Arial"><font color="#0d0d0d"><font size="4" style="font-size: 14pt">تستخدم
			لإدخال بيانات من نوع </font></font><font size="4" style="font-size: 14pt">long</font></font>
</p>
		</td>
	</tr>
	<tr valign="top">
		<td width="273" style="border: 1px solid #000000; padding: 0in 0.08in"><p align="center">
			<font color="#0d0d0d"><font face="Consolas, serif">nextShort()</font></font>
</p>
		</td>
		<td width="273" style="border: 1px solid #000000; padding: 0in 0.08in"><p align="right">
			<font face="Arial"><font color="#0d0d0d"><font size="4" style="font-size: 14pt">تستخدم
			لإدخال بيانات من نوع </font></font><font size="4" style="font-size: 14pt">short</font></font>
</p>
		</td>
	</tr>
</table>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<br/>
<br/>


</p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><font color="#ff0000"><font size="5" style="font-size: 18pt"><b>اختبر
نفسك </b></font></font><font size="5" style="font-size: 18pt"><b>:</b></font></font>
</p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; line-height: 100%; background: #f1f1f1">
<font color="#0077aa"><font face="Consolas, serif"><font size="4" style="font-size: 13pt">public</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="4" style="font-size: 13pt">
</font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="4" style="font-size: 13pt">class</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="4" style="font-size: 13pt">
</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="4" style="font-size: 13pt">MyClass</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="4" style="font-size: 13pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="4" style="font-size: 13pt">{</font></font></font>
</p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font color="#0077aa"><font face="Consolas, serif"><font size="4" style="font-size: 13pt">public</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="4" style="font-size: 13pt">
</font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="4" style="font-size: 13pt">static</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="4" style="font-size: 13pt">
</font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="4" style="font-size: 13pt">void</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="4" style="font-size: 13pt">
</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="4" style="font-size: 13pt">main</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="4" style="font-size: 13pt">(</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="4" style="font-size: 13pt">String</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="4" style="font-size: 13pt">[]</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="4" style="font-size: 13pt">
args</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="4" style="font-size: 13pt">)</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="4" style="font-size: 13pt">
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="4" style="font-size: 13pt">{</font></font></font>
</p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; line-height: 100%; background: #f1f1f1">
<font color="#000000"><font face="Consolas, serif"><font size="4" style="font-size: 13pt">____._____.______</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="4" style="font-size: 13pt">(</font></font></font><font color="#669900"><font face="Consolas, serif"><font size="4" style="font-size: 13pt">&quot;Hello
World&quot;</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="4" style="font-size: 13pt">);</font></font></font>
</p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font color="#999999"><font face="Consolas, serif"><font size="4" style="font-size: 13pt">}</font></font></font>
</p>
<p style="margin-bottom: 0.11in; line-height: 108%"><br/>
<br/>


</p>
