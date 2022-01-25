---
layout: "content"
categories: computer-science algorithms
title: "القوائم المترابطة  "
permalink: /:categories/:title.html
type: "course"
---

<div class="col-12">
<h2> Linked list- القوائم المترابطة</h2>
<p class="content-p">
تعد القوائم المترابطة إحدى بنى المعطيات الخطية التي تقوم بتخزين العناصر الموجودة في أماكن مختلفة في الذاكرة وترتبط هذه العناصر مع بعضها بواسطة مؤشرات
تتآلف من عدد من العقد المرتبطة ببعضها وتحوي كل عقدة على قيمة للعنصر ومؤشر يشير إلى العنصر الذي يليه
يدعى عنوان العقدة الأولى <bdi>Head</bdi>
<bdi>    بينما عنوان العقدة الأخيرة غير معرف لأن العقدة الأخيرة لا تشير إلى شيء أي إلى NULL </bdi>
</p>
<br/><img class="content-image" src="/assets/img/algorithms/linked-list-1.png" alt="images/linked-list-1"/>
<h3> : أهم ما يميز القوائم المترابطة </h3>
<p class="content-p">
تكون العناصر مرتبة بشكل عشوائي في الذاكرة
عند استخدام القوائم المترابطة فإن الذاكرة تحجز في وقت التنفيذ runtime
ذات حجم متغير وتمتاز بالمرونة والقابلية لتكبير أو تصغير حجمها حسب الحاجة
سهولة إضافة عناصر وحذفها من أي مكان 
</p>
<h3> : مساوئ القوائم المترابطة </h3>
<p class="content-p">
لا يمكن الوصول إلى عناصر القوائم المترابطة بطريقة عشوائية
<br>
تحتاج إلى مساحة تخزينية لان كل عنصر يرتبط بمؤشر 
</p>
<h3> : تمثيل القوائم المترابطة </h3>
<h5> : كل عقدة تتألف من </h5>
<p class="content-p">
	 قيمة العنصر -
     <br>	مؤشر يحمل عنوان عقدة أخرى -
</p>
<div class="code-box">
<p class="content-p">
<pre style="line-height: 1.5em;">
struct node
{
 int data;
 struct node *next;
};
</pre>
</p>
</div>
<p class="content-p">
لنقوم بإنشاء قائمة مترابطة بسيطة تتألف من ثلاث عناصر لفهم كيفية عملها:
</p>
<div class="code-box">
<p class="content-p">
<pre style="line-height: 1.5em;">
/* تهيئة العقد*/
struct node *head;
struct node *one = NULL;
struct node *two = NULL;
struct node *three = NULL;
/*تخصيص الذاكرة */
one = malloc(sizeof(struct node));
two = malloc(sizeof(struct node));
three = malloc(sizeof(struct node));
/* تعيين قيم البيانات*/
one->data = 1;
two->data = 2;
three->data=3;
/* وصل العقد */
one->next = two;
two->next = three;
three->next = NULL;
/* حفظ عنوان أول عنصر في الرأس*/
head = one;
</pre>
</p>
</div>
<p class="content-p">
 : بهذه الخطوات البسيطة قمنا بإنشاء قائمة مترابطة مؤلفة من ثلاث عناصر </p>
 <br/><img class="content-image" src="/assets/img/algorithms/linked-list-2.jpg" alt="images/linked-list-2"/>
<h4> : تطبيق عملي </h4>
<div class="code-box">
<p class="content-p">
<pre style="line-height: 1.5em;">
// Linked list implementation in C++

#include <bits/stdc++.h>
using namespace std;
// إنشاء عقدة
class Node {
public:
int value;
Node\* next;
};

int main() {
Node* head;
Node* one = NULL;
Node* two = NULL;
Node* three = NULL;

// heap تخصيص ثلاث عقد في الذاكرة
one = new Node();
two = new Node();
three = new Node();

// valueتعيين قيم ل
one->value = 1;
two->value = 2;
three->value = 3;

// وصل العقد
one->next = two;
two->next = three;
three->next = NULL;

// طباعة قيم القائمة المترابطة
head = one;
while (head != NULL) {
cout << head->value;
head = head->next;
}

</pre>
</p>
</div>
<h4> : العمليات على السلاسل</h4>
<h5> : الانتقال عبر القائمة المترابطة • </h5>
<p class="content-p"><bdi>
يمكن عرض محتويات القائمة المترابطة بشكل بسيط وذلك عن طريق الاستمرار في نقل العقدة المؤقتة ونقوم بعرض محتواها عندما يكون فارغ أي NULL  نعلم حينها أننا وصلنا إلى نهاية القائمة ونخرج من حلقة التكرار
</bdi>
</p>
<div class="code-box">
<p class="content-p">
<pre style="line-height: 1.5em;">
struct node *temp = head;
cout &lt;&lt;”List elements are _ \n”;
while(temp != NULL) {
cout&lt;&lt;”---&gt;”&lt;&lt;temp-&gt;data;
  temp = temp->next;
}
</pre>
</p>
</div>
<div class="code-box">
<p class="content-p">
<pre style="line-height: 1.5em;">
List elements are - 
1 --->2 --->3 --->
</pre>
</p>
</div>
<h4> : إضافة عنصر إلى القائمة المترابطة •</h4>
<p class="content-p">يمكن أضافة عنصر في البداية أو في المنتصف أو في النهاية </p>
<h5>  : أضافة عنصر في البداية -</h5>
<p class="content-p">
	تهيئة الذاكرة للعقدة الجديدة -
    <br>	تخرين بيانات العنصر -
	<br> <bdi> -جعل مؤشر next  الخاص بالعقدة الجديدة  يشير إلى رأس القائمةhead   </bdi>
    <br><bdi>- تغير الرأس head  وجعله  العقدة التي تم إنشاءها مؤخرا </bdi>
    </p>
<div class="code-box">
<p class="content-p">
<pre style="line-height: 1.5em;">
struct node *newNode;
newNode = malloc(sizeof(struct node));
newNode->data = 4;
newNode->next = head;
head = newNode;
</pre>
</p>
</div>
<h5>  : أضافة عنصر في النهاية -</h5>
<p class="content-p">
	تهيئة الذاكرة للعقدة الجديدة -
    <br>	تخرين بيانات العنصر -
	<br> 	الانتقال إلى العقدة الأخيرة - 
    <br><bdi>	 - جعل المؤشر next   الخاص بأخر عقدة هو العقدة التي تم إنشاءها مؤخرا  </bdi>
</p>
<div class="code-box">
<p class="content-p">
<pre style="line-height: 1.5em;">
struct node *newNode;
newNode = malloc(sizeof(struct node));
newNode->data = 4;
newNode->next = NULL;
struct node *temp = head;
while(temp->next != NULL){
    temp = temp->next;
}
temp->next = newNode;
</pre>
</p>
</div>
<h5> : أضافة عنصر في المنتصف - </h5>
<p class="content-p">
	تهيئة الذاكرة وتخزين قيمة العنصر للعقدة الجديدة-
    <br>الانتقال إلى العقدة التي تسبق الموقع المطلوب للعقدة الجديدة -
	<br> 	الانتقال إلى العقدة الأخيرة - 
    <br><bdi> - تغير المؤشرات next  التالية لتضمين العقدة الجديدة   </bdi>
</p>
<div class="code-box">
<p class="content-p">
<pre style="line-height: 1.5em;">
struct node *newNode;
newNode = malloc(sizeof(struct node));
newNode->data = 4;
struct node *temp = head;
for(int i=2; i < position; i++) {
if(temp->next != NULL) {
temp = temp->next; }
}
newNode->next = temp->next;
temp->next = newNode;
</pre>
</p>
</div>
<h5>  : حذف عنصر من القائمة المترابطة • </h5>
<p class="content-p">
يمكن الحذف من البداية أو المنتصف أو النهاية 
</p>
<h5>  : الحذف عنصر من البداية - </h5>
<p class="content-p">
جعل الرأس head هو العقدة الثانية</p>
<h5>  : الحذف من النهاية - </h5>
<p class="content-p">
	الانتقال إلى العنصر قبل الأخيرة -
<br><bdi> - جعل المؤشر الخاص به يشير إلى Null </bdi>
</p>
<h5>  : الحذف من المنتصف -  </h5>
<p class="content-p">
	الانتقال إلى العنصر الذي يسبق العنصر الذي نريد حذفه -
<br>تغير المؤشرات التالية لاستبعاد هذا العنصر من القائمة -
</p>
<div class="code-box">
<p class="content-p">
<pre style="line-height: 1.5em;">
for(int i=2; i< position; i++) {
 if(temp->next!=NULL) {
      temp = temp->next;
  }
}	
	temp->next = temp->next->next;
</pre>
</p>
</div>
<h5>  : البحث عن عنصر في القائمة المترابطة •  </h5>
<p class="content-p">
 : يمكننا البحث عن عنصر معين في القائمة باستخدام حلقة التكرار عن طريق الخطوات التالية 
<br><bdi>	جعل الرأس head هو العقدة الحالية </bdi> - 
<br> <bdi>NULL</bdi>    البدء في تنفيذ الحلقة حتى تصبح العقدة الحالية 
 <bdi>NULL</bdi>   لأن أخر عنصر يشير إلى -
<br>  <bdi>false</bdi> في كل تكرار تحقق إذا كان العنصر الذي نبحث عنه 
    <bdi>key</bdi> مساويا لقيمة العنصر حينها يرجع
  <bdi>true</bdi> وإلا يرجع -
</p>
<div class="code-box">
<p class="content-p">
<pre style="line-height: 1.5em;">
// البحث عن عنصر 
bool searchNode(struct Node** head_ref, int key) {
struct Node* current = *head_ref;

while (current != NULL) {
if (current->data == key) return true;
current = current->next;
}
return false;
}

</pre>
</p>
</div>
<h5>  : ترتيب عناصر القائمة المترابطة  • </h5>
<p class="content-p">
<bdi> نحن نستخدم خوارزمية ترتيب بسيطة وهي  bubble sort   لترتيب عناصر القائمة بشكل تصاعدي  </bdi> 
<br>وإنشاء عداد <bdi>index</bdi>  للاستخدام لاحقا<bdi>	جعل الرأس head هو العقدة الحالية </bdi> - 
<br>	إذا كان<bdi> head </bdi> فارغ 
  أي  <bdi>NULL </bdi>ينتهي البرنامج-
<br> 	وإلا تنفيذ الحلقة حتى نصل إلى أخر عقدة -
<br>	في كل تكرار اتبع الخطوات <bdi> 5</bdi>
و 6-
<br><bdi>	نقوم بتخزين المؤشر الخاص بالعقدة الحالية في index </bdi> -
<br><bdi>	تحقق إذا كانت قيمة العنصر للعقدة الحالية أكبر من العقدة التالية حينها نقوم بالمبادلة بين index  والعقدة الحالية
</bdi>-
</p>
<div class="code-box">
<p class="content-p">
<pre style="line-height: 1.5em;">
// ترتيب القائمة المترابطة
void sortLinkedList(struct Node** head_ref) {
 struct Node *current = *head_ref, *index = NULL;
  int temp;

if (head_ref == NULL) {
return;
} else {
while (current != NULL) {
// يشير إلى المؤشر الخاص بالعقدة الحالية index
index = current->next;

    while (index != NULL) {
      if (current->data > index->data) {
        temp = current->data;
        current->data = index->data;
        index->data = temp;
      }
      index = index->next;
    }
    current = current->next;

}
}
}

</pre>
</p>
</div>
<h3> : التعقيد الزمني للسلاسل المترابطة </h3>
<table>
  <tr>
      <th> الحالة الأسوء</th>
        <th>الحالة المتوسطة</th>
          <th>العملية</th>
  </tr>
  <tr>
    <td>O(n)</td>
    <td>O(n)</td>
     <td>البحث</td>
  </tr>
  <tr>
    <td>O(n)</td>
  <td>O(n)</td>
      <td>لإضافة</td>
  </tr>
    <tr>
    <td>O(1)</td>
   <td>O(1)</td>
      <td>لحذف</td>
  </tr>
</table>
<h4> : أنواع القوائم المترابطة </h4>
<h5>	: القوائم المترابطة المفردة • </h5>
<p class="contant-p">
وهي الأكثر انتشارا وكل عقدة تتألف من قيمة العنصر ومؤشر يشير إلى العنصر التالي
</p>
 <br/><img class="content-image" src="/assets/img/algorithms/linked-list-3.jpg" alt="images/linked-list-3"/>
<p class="contant-p">
 : العقدة تكون على الشكل التالي 
</p>
<div class="code-box">
<p class="content-p">
<pre style="line-height: 1.5em;">
struct node {
    int data;
    struct node *next;
}
</pre>
</p>
</div>
<p class="content-p">
 : يمكن إنشاء قائمة مترابطة مفردة تتألف من ثلاث عناصر على الشكل التالي 
 </p>
 <div class="code-box">
<p class="content-p">
<pre style="line-height: 1.5em;">
/* إنشاء العقد*/
struct node *head;
struct node *one = NULL;
struct node *two = NULL;
struct node *three = NULL;

/_ تهيئة الذاكرة _/
one = malloc(sizeof(struct node));
two = malloc(sizeof(struct node));
three = malloc(sizeof(struct node));

/_ ÷عطاء قيم للعناصر_/
one->data = 1;
two->data = 2;
three->data = 3;

/_ توصيل العقد _/
one->next = two;
two->next = three;
three->next = NULL;

/_ head حفظ العنوان الخاص بأخر عقدة في ا_/
head = one;

</pre>
</p>
</div>
<h5>	: 	القوائم المترابطة المزدوجة • </h5>
<p class="contant-p">
نقوم بإضافة مؤشر إلى للعقدة السابقة في القائمة المترابطة المزدوجة يمكننا حينها الذهاب في كلا الاتجاهين إلى الامام أو إلى الخلف 
</p>
<br/><img class="content-image" src="/assets/img/algorithms/doubly-linked-list-4.jpg" alt="images/linked-list-4"/>
<p class="contant-p">  
 : العقدة تكون على الشكل التالي 
</p>
<div class="code-box">
<p class="content-p">
<pre style="line-height: 1.5em;">
struct node {
    int data;
    struct node *next;
    struct node *prev;
}
</pre>
</p>
</div>
<p class="content-p">
 : يمكن إنشاء قائمة مترابطة مزدوجة تتألف من ثلاث عناصر على الشكل التالي  
 </p>
 <div class="code-box">
<p class="content-p">
<pre style="line-height: 1.5em;">
/* إنشاء العقد*/
struct node *head;
struct node *one = NULL;
struct node *two = NULL;
struct node *three = NULL;

/_ تخصيص الذاكرة _/
one = malloc(sizeof(struct node));
two = malloc(sizeof(struct node));
three = malloc(sizeof(struct node));

/_ إعطاء قيم _/
one->data = 1;
two->data = 2;
three->data = 3;

/_ توصيل العقد _/
one->next = two;
one->prev = NULL;

two->next = three;
two->prev = one;

three->next = NULL;
three->prev = two;

/_ head حفظ العنوان الخاص بأخر عقدة في ا_/
head = one;

</pre>
</p>
</div>
<h5>	: القائمة المترابطة الدائرية • </h5>
<p class="contant-p">
في هذا النوع يرتبط العنصر الأخير من القائمة المترابطة بالعنصر الأول 
</p>
<br/><img class="content-image" src="/assets/img/algorithms/circular-linked-list-5.jpg" alt="images/linked-list-4"/>
<p class="contant-p">
القائمة المترابطة الدائرية يمكن أن تكون مفردة أو مزدوجة 
في القائمة المفردة المؤشر الخاص بالعنصر الأخير يشير إلى العنصر الأول
في القائمة المزدوجة المؤشر <bdi>prv</bdi> الخاص بالعنصر الأول يشير إلى العنصر الأخير أيضا 
</p>
<div class="code-box">
<p class="content-p">
<pre style="line-height: 1.5em;">
struct node {
    int data;
    struct node *next;
    struct node *prev;
}
</pre>
</p>
</div>
<p class="content-p">
 : يمكن إنشاء قائمة مترابطة دائرية مفردة تتألف من ثلاث عناصر على الشكل التالي 
 </p>
 <div class="code-box">
<p class="content-p">
<pre style="line-height: 1.5em;">
/* إنشاء العقد */
struct node *head;
struct node *one = NULL;
struct node *two = NULL;
struct node *three = NULL;

/_ تخصيص الذاكرة _/
one = malloc(sizeof(struct node));
two = malloc(sizeof(struct node));
three = malloc(sizeof(struct node));

/_ تعيين قيم للعناصر_/
one->data = 1;
two->data = 2;
three->data = 3;

/_ توصيل العقد _/
one->next = two;
two->next = three;
three->next = one;

/_ head حفظ العنوان الخاص بأخر عقدة في ال_/
head = one;

</pre>
</p>
</div>
<h4> : تطبيقات القوائم المترابطة </h4>
<p class="content-p">
تخصيص الذاكرة الديناميكي -
<br>يستخدم في إنشاء المكدس وقائمة الانتظار -
<br>جداول التجزئة والرسوم البيانية -
<br>يستخدم في التراجع عن وظائف البرامج -
</p>
