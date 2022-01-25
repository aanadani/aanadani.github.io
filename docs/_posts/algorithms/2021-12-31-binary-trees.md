---
layout: "content"
categories: computer-science algorithms
title:     " الشجرة الثنائية  "
permalink: /:categories/:title.html
type: 'course'
---
<div class="col-12">
<h2>   Binary Tree -   الشجرة الثنائية  </h2>
<p class="content-p">
الشجرة الثنائية  هي نوع من أنواع بنى المعطيات الشجرية حيث يمكن أن يكون لكل عقدة أب على الأكثر  عقدتين أبناء تتكون كل عقدة من الشجرة الثنائية من ثلاث عناصر :
<br>
<bdi>
1.	بيانات العنصر
<br>
2.	عنوان للأبن الأيسر
<br>
3.	عنوان للأبن الأيمن 
</bdi>
</p>
 <br/><img class="content-image" src="/assets/img/algorithms/binary_tree_1.jpg" alt="images/binary_tree_1"/>
 <h3> : أنواع الأشجار الثنائية </h3>
 <h4><bdi>الأشجار الثنائية الممتلئة full binary tree :</bdi></h4>
 <p class="content-p">
 هو نوع خاص من أنواع الأشجار الثنائية تكون كل عقدة تحتوي عقدتين من عقد أبناء أو لا تحتوي على عقد أبناء 
 </p>
  <br/><img class="content-image" src="/assets/img/algorithms/full-binary-tree2.jpg" alt="images/full-binary-tree2"/>
  <h3><bdi>•	الأشجار الثنائية الكاملة complete binary tree:</bdi></h3>
   <p class="content-p">
  : هي نوع من أنواع الأشجار الثنائية تشبه الأشجار الثنائية الممتلئة مع اثنين من الاختلافات 
 <br>
 يجب ان يكون كل مستوى ممتلئ تماما
 <br>
 يجب أن جميع العناصر الأوراق تميل إلى اليسار 
 قد لا يكون للعنصر الأخير من عناصر  الأوراق أشقاء 
 </p>
<br/><img class="content-image" src="/assets/img/algorithms/complete-binary-tree4.jpg" alt="images/complete-binary-tree4"/>
 <h3><bdi>•	الأشجار الثنائية المنحرفة skewed binary tree :</bdi></h3>
 <p class="content-p">
 <bdi>هي نوع من أنواع الأشجار الثنائية التي تهيمن على الشجرة إما من قبل العقد اليسرى او العقد اليمنى هناك نوعان من أنواع الشجرة المنحرفة :
 <br>
1.	شجرة ثنائية منحرفة اليسار
<br>
2.	شجرة ثنائية منحرفة اليمين
</bdi></p>
<br/><img class="content-image" src="/assets/img/algorithms/skewed-binary-tree6.jpg" alt="images/skewed-binary-tree6"/>
<h3><bdi>•	الأشجار الثنائية التامة    perfect binary tree:</bdi></h3>
<p class="content-p">
هي نوع من أنواع الأشجار الثنائية فيها كل عقدة داخلية لها عقدتين أبناء وكانت جميع عقد الأوراق في مستوي واحد
</p>
<br/><img class="content-image" src="/assets/img/algorithms/perfect-binary-tree3.jpg" alt="images/perfect-binary-tree3"/>
<h3><bdi>•	الأشجار الثنائية المتوازنة balanced binary tree  :</bdi></h3>
<p class="content-p">
هو نوع من أنواع الأشجار الثنائية بحيث يكون الفرق بين الارتفاع الشجرة الفرعية اليسرة والشجرة الفرعية اليمنى لكل عقدة  اما  0 او 1
</p>
<br/><img class="content-image" src="/assets/img/algorithms/height-balanced7.jpg" alt="images/height-balanced7"/>
<h3><bdi>•	الأشجار الثنائية المنحلة degenerate or pathological binary tree :</bdi></h3>
<p class="content-p">
هو نوع من أنواع الأشجار الثنائية يكون لكل عقدة أبن واحد أما يسار أو يمين 
</p>
<br/><img class="content-image" src="/assets/img/algorithms/degenerate-binary-tree5.jpg" alt="images/degenerate-binary-tree5"/>
<h3> : تمثيل الشجرة الثنائية </h3>
<p class="content-p"><b>
عقدة الشجرة الثنائية يتم تمثيلها عن طريق structure يحتوي على قسم للبيانات ومؤشرين إلى structures من نفس النوع 
</b></p>
<div class="code-box">
<p class="content-p">
<pre style="line-height: 1.5em;">
struct node
{
 int data;
 struct node *left;
 struct node *right;
};
</pre>
</p>
</div>
<br/><img class="content-image" src="/assets/img/algorithms/binary-tree-representation.jpg" alt="images/binary-tree-representation"/>
<h3>  تطبيقات الأشجار الثنائية : </h3>
<p class="content-p"><bdi><b>
•	للوصول السهل والسريع للبيانات
<br>
•	في خوارزمية جهاز التوجيه router
<br>
•	لتطبيق بنى المعطيات الكومة heap
<br>
•	بناء الشجرة
</b></bdi></p>