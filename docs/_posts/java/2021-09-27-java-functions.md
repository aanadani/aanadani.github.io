---
layout: "detail"
categories: programming java
title:     "الدوال"
permalink: /:categories/:title.html
type: 'course'
---

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font color="#000000"><font size="4" style="font-size: 16pt"><b>الدوال
في جافا </b></font></font><font size="4" style="font-size: 16pt"><b>:</b></font></p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><font color="#000000"><font size="3" style="font-size: 11pt">هي
مجموعة من التعليمات البرمجية تنفذ فقط
عند استدعاءها  وتسمى &nbsp;</font></font></span></font><font size="3" style="font-size: 11pt"><b>function</b></font></p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><font color="#000000"><font size="3" style="font-size: 11pt">تستخدم
الدوال لإعادة استخدام الكود حيث نقوم
بكتابته مرة واحدة ونستخدمه عدة مرات</font></font></span></font></p>
<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><font color="#000000"><font size="3" style="font-size: 11pt">تحوي
جافا مجموعة من الدوال الجاهزة التي يمكنك
استعمالها مباشرة </font></font></span></font>
</p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font color="#ff0000"><font size="4" style="font-size: 16pt"><b>مثال
</b></font></font><font size="4" style="font-size: 16pt"><b>:</b></font></p>

<div class="code-box">
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">System</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">out</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">println</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(
)</font></font></font></p>
</div>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><font color="#000000"><font size="4" style="font-size: 16pt"><span lang="ar-SY"><b>إ</b></span></font></font><font color="#000000"><font size="4" style="font-size: 16pt"><b>نشاء
الدوال </b></font></font></span></font><font color="#000000"><font face="Arial, serif"><font size="4" style="font-size: 16pt"><b>:</b></font></font></font></p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><font color="#000000"><font size="3" style="font-size: 11pt">عند
انشاء أي دالة يجب معرفة بعض المصطلحات</font></font></font><font color="#0d0d0d"><font size="4" style="font-size: 16pt"><b>
</b></font></font><font size="4" style="font-size: 16pt"><b>:</b></font></p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<b>Modifier</b>
: تعني
محدد الوصول </p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt"><b>returnType</b></font></font></font><font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt">:
</font></font><font face="Arial"><span lang="ar-SA"><font size="3" style="font-size: 11pt">يحدد
النوع الذي سترجعه الدالة  يمكن ان يكون
أي نوع من أنواع البيانات </font></span></font><font face="Arial, serif"><font size="3" style="font-size: 11pt">((int-double-float-…</font></font></font></p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
وفي
حال ان الدالة لا ترجع قيمة يكون نوع
الارجاع void </p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font color="#000000"><font face="Arial, serif"><font size="3" style="font-size: 11pt"><b>methodname:
</b></font></font></font><font face="Arial"><span lang="ar-SA"><font color="#0d0d0d"><font size="3" style="font-size: 11pt"><b>يمثل</b></font></font><font color="#000000"><font size="3" style="font-size: 11pt">
اسم الدالة</font></font></span></font></p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font color="#0d0d0d"><font face="Arial, serif"><font size="3" style="font-size: 11pt"><b>parameter:
</b></font></font></font><font face="Arial"><span lang="ar-SA"><font color="#0d0d0d"><font size="3" style="font-size: 11pt">الوسطاء
التي نمررها للدالة</font></font></span></font></p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font color="#0d0d0d"><font face="Arial, serif"><font size="3" style="font-size: 11pt"><b> Method Body:
</b></font></font></font><font face="Arial"><span lang="ar-SA"><font color="#0d0d0d"><font size="3" style="font-size: 11pt"> تعني التعليمات التي تنفذها الدالة</font></font></span></font></p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<br/>
<br/>
</p>

<div class="code-box">
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">Modifier
</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">returnType</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">methodname
</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(parameter
){</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">Method
body</font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font></p>
</div>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font color="#ff0000"><font size="4" style="font-size: 16pt"><b>مثال
</b></font></font><font size="4" style="font-size: 16pt"><b>:</b></font></p>

<div class="code-box">
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">public</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">class</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">Main</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">static</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">void</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">myMethod</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">()</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">    </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">System</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">out</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">println</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#669900"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">&quot;I
just got executed!&quot;</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">);</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<br/>
<br/>

</p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">public</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">static</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">void</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">main</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">String</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">[]</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
args</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">)</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">    </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">myMethod</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">();</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font></font></font></p>
</div>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><font color="#0d0d0d"><font size="3" style="font-size: 11pt"><span lang="ar-SY">يمكن
تمرير وسطاء إلى الدالة يمكن أضافة أكثر
من وسيط فقط افصلهم بفاصلة</span></font></font></span></font></p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font color="#ff0000"><font size="4" style="font-size: 16pt"><b>مثال
</b></font></font><font size="4" style="font-size: 16pt"><b>:</b></font></p>

<div class="code-box">
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">public</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">class</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">Main</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">static</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">void</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">myMethod</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">String</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
fname</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">)</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">    </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">System</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">out</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">println</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">fname
</font></font></font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">+</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#669900"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">&quot;
Refsnes&quot;</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">);</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font></font></font></p>
</div>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font color="#ff0000"><font size="4" style="font-size: 16pt"><b> استدعاء الدالة
</b></font></font><font size="4" style="font-size: 16pt"><b>:</b></font></p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><font color="#0d0d0d"><font size="3" style="font-size: 11pt"><span lang="ar-SY">لا
يتم تنفيذ التابع بمجرد التصريح عنه
لتنفيذ التعليمات الموجودة ضمنه يجب
علينا استدعاءه ضمن تابع اخر عن طريق ذكر
اسمه مع ارسال قيم الوسطاء الخاصة به</span></font></font></span></font></p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><font color="#0d0d0d"><font size="3" style="font-size: 11pt"><span lang="ar-SY"> نلاحظ إذا كان نوع الإرجاع void نقوم بذكر اسم التابع مع تمرير الوسطاء، بينما إذا كان نوع الإرجاع</span></font></font></span></font></p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font color="#0d0d0d"> </font><font color="#0d0d0d"><font face="Arial, serif"><font size="3" style="font-size: 11pt">(int-float-double)
</font></font><font face="Arial"><span lang="ar-SA"><font size="3" style="font-size: 11pt"><span lang="ar-SY">يفضل
اسناد ناتج الاستدعاء في متحول لاستخدامه
لاحقا او يمكن طباعته مباشرة عن طريق تابع
الطباعة </span></font></span></font><font face="Arial, serif"><font size="3" style="font-size: 11pt">.</font></font></font></p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><font color="#0d0d0d"><font size="3" style="font-size: 11pt"><span lang="ar-SY"> يستخدم نوع الإرجاع void عندما لا ترجع الدالة أي شيء، إذا أردنا للدالة أن ترجع نوع بيانات معين يمكن استخدام أحد أنواع البيانات (int, char, float ...) </span></font></font></span></font></p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><font color="#0d0d0d"><font size="3" style="font-size: 11pt"><span lang="ar-SY"> ويجب استخدام return بداخل الدالة </span></font></font></span></font></p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<br/>
<br/>
</p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font color="#0d0d0d"> </font>
</p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font color="#ff0000"><font size="4" style="font-size: 16pt"><b>مثال
</b></font></font><font size="4" style="font-size: 16pt"><b>:</b></font></p>

<div class="code-box">
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">public</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">class</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">Main</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">static</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">void</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">myMethod</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">String</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
fname</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">)</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">    </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">System</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">out</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">println</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">fname
</font></font></font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">+</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#669900"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">&quot;
Refsnes&quot;</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">);</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<br/>
<br/>

</p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">public</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">static</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">void</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">main</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">String</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">[]</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
args</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">)</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">    </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">myMethod</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#669900"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">&quot;Liam&quot;</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">);</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#708090"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">//
Liam Refsnes</font></font></font></font></font></p>
</div>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><font color="#0d0d0d"><font size="3" style="font-size: 11pt"><span lang="ar-SY"> يتم هنا استبدال الوسيط fname في التابع الذي تم استدعاءه بالقيمة liam ليتم بعدها تنفيذ التعليمات الموجودة ضمنه باستخدام هذه القيم </span></font></font></span></font></p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font color="#ff0000"><font size="4" style="font-size: 16pt"><b>مثال
</b></font></font><font size="4" style="font-size: 16pt"><b>:</b></font></p>

<div class="code-box">
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">public</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">class</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">Main</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">static</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><b><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">int</font></font></font></b><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">myMethod</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">int</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
x</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">)</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">    </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><b><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">return</font></font></font></b><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">5</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">+</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
x</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">;</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<br/>
<br/>

</p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">public</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">static</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">void</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">main</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">String</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">[]</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
args</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">)</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">    </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">System</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">out</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">println</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">myMethod</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">3</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">));</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#708090"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">//
Outputs 8 (5 + 3)</font></font></font></font></font></p>
</div>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><font color="#0d0d0d"><font size="3" style="font-size: 11pt"><span lang="ar-SY"> كما يمكننا تخزين النتيجة في متغير. </span></font></font></span></font></p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font color="#ff0000"><font size="4" style="font-size: 16pt"><b>مثال
</b></font></font><font size="4" style="font-size: 16pt"><b>:</b></font></p>

<div class="code-box">
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">public</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">class</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">Main</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">static</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">int</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">myMethod</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">int</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
x</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">,</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">int</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
y</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">)</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">    </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">return</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
x </font></font></font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">+</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
y</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">;</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<br/>
<br/>

</p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">public</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">static</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">void</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">main</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">String</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">[]</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
args</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">)</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">    </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">int</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
z </font></font></font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">=</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">myMethod</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">5</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">,</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">3</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">);</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">    </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">System</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">out</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">println</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">z</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">);</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#708090"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">//
Outputs 8 (5 + 3)</font></font></font></font></font></p>
</div>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font color="#ff0000"><font size="4" style="font-size: 16pt"><b> التحميل الزائد للدوال
</b></font></font><font size="4" style="font-size: 16pt"><b>:</b></font></p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><font color="#0d0d0d"><font size="3" style="font-size: 11pt"><span lang="ar-SY">يمكن
لأكثر من دالة أن يكون لها نفس الاسم مع
الاختلاف في نوع الوسطاء أو عددها أو
ترتيبها</span></font></font></span></font></p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font color="#ff0000"><font size="4" style="font-size: 16pt"><b>مثال
</b></font></font><font size="4" style="font-size: 16pt"><b>:</b></font></p>

<p dir="rtl" align="right" style="margin-bottom: 0.11in; line-height: 108%">
<font face="Arial"><span lang="ar-SA"><font color="#0d0d0d"><font size="3" style="font-size: 11pt"><span lang="ar-SY">بدلا
من تعريف دالتين يقومان بنفس المهمة يمكن
أن نقوم بالتحميل الزائد لهم</span></font></font></span></font></p>

<div class="code-box">
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">static</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">int</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">plusMethod</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">int</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
x</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">,</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">int</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
y</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">)</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">return</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
x </font></font></font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">+</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
y</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">;</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<br/>
<br/>

</p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">static</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">double</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">plusMethod</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">double</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
x</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">,</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">double</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
y</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">)</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">return</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
x </font></font></font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">+</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
y</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">;</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<br/>
<br/>

</p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">public</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">static</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">void</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">main</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">String</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">[]</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
args</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">)</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">{</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">int</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
myNum1 </font></font></font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">=</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">plusMethod</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">8</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">,</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">5</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">);</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  </font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">double</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
myNum2 </font></font></font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">=</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">plusMethod</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">4.3</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">,</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#990055"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">6.26</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">);</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  <font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">System</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">out</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">println</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#669900"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">&quot;int:
&quot;</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">+</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
myNum1</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">);</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font color="#000000">  <font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">System</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#0077aa"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">out</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">.</font></font></font><font color="#dd4a68"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">println</font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">(</font></font></font><font color="#669900"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">&quot;double:
&quot;</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
</font></font></font></font></font><font color="#9a6e3a"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">+</font></font></font><font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#000000"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">
myNum2</font></font></font></font></font><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">);</font></font></font></font></font></p>
<p style="margin-top: 0.17in; margin-bottom: 0.17in; border-top: none; border-bottom: none; border-right: none; padding-top: 0in; padding-bottom: 0in; padding-left: 0.17in; padding-right: 0in; line-height: 100%; background: #f1f1f1">
<font face="Courier New, serif"><font size="2" style="font-size: 10pt"><font color="#999999"><font face="Consolas, serif"><font size="3" style="font-size: 11pt">}</font></font></font></font></font></p>
</div>

<p style="margin-bottom: 0.11in; line-height: 108%"><br/>
<br/>

</p>
