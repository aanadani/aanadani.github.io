---
layout: "content"
categories: computer-science algorithms
title:     "   شجرة البحث الثنائي  "
permalink: /:categories/:title.html
type: 'course'
---
<div class="col-12">
<style>

</style>
<h2>   Binary search tree -   شجرة البحث الثنائي  </h2>
<p class="content-p"><bdi>
شجرة البحث الثنائي هي نوع من بنى المعطيات التي تسمح لنا بسرعة بالاحتفاظ بقائمة مرتبة من الأرقام
<br>
•	تدعى بالشجرة الثنائية لأن كل عقدة من الشجرة لديها اثنين من الأبناء
<br>
•	تدعى بالشجرة الثنائية لأنه من الممكن استخدامها للبحث عن وجود رقم خلال تعقيد زمني  O(log(n))
</bdi>
</p>
<h3> : الخصائص التي تفصل بين شجرة البحث الثنائي عن الشجرة ثنائية عادية </h3>
<p class="content-p"><bdi>
1.	كل العقد في الشجرة الفرعية اليسرى هي أصغر من  الجذر
<br>
2.	كل العقد في الشجرة الفرعية اليمنى هي أكبر من الجذر
<br>
3.	كل من الأشجار الفرعية من كل عقدة هي أشجار بحث ثنائية أي لها نفس الخصائص المذكورة أعلاه 
</bdi></p>
 <br/><img class="content-image" src="/assets/img/algorithms/binarysearchtree1.jpg" alt="images/binarysearchtree1"/>
 <p class="content-p">
 الشجرة الثنائية الموجودة في اليمين ليست شجرة بحث ثنائية لأن الشجرة الفرعية الموجودة على يمين العقدة 3 تحوي قيمة أصغر منها
 </p>
 <h3> : هناك عمليتان أساسيتان يمكنك تنفيذهما على شجرة البحث الثنائي </h3>
 <h4>	: عملية البحث •</h4>
 <p class="content-p"><bdi>
 الخوارزمية تعتمد على خاصية BST حيث كل شجرة فرعية يسرى تحوي قيم أقل من الجذر وكل شجرة فرعية يمنى قيم أكبر من الجذر
أذا كانت القيمة أقل من الجذر يمكننا القول بالتأكيد القيمة ليست في الشجرة الفرعية اليمنى نحن نحتاج للبحث فقط في الشجرة الفرعية اليسرى 
وإذا كانت القيمة أكبر من الجذر يمكننا القول بالتأكيد بأن القيمة ليست في الشجرة الفرعية اليسرى نحن نحتاج فقط للبحث في الشجرة الفرعية اليمنى 
</bdi></p>
<h4> : الخوارزمية </h4>
<div class="code-box">
<p class="content-p">
<pre style="line-height: 1.5em;">
If root == NULL 
    return NULL;
If number == root->data 
    return root->data;
If number < root->data 
    return search(root->left)
If number > root->data 
    return search(root->right)
</pre>
</p>
</div>
<p class="content-p"><b> : دعونا نحاول تصور هذا مع الرسم التخطيطي </b></p>
<br/><img class="content-image" src="/assets/img/algorithms/binary-search-tree2.jpg" alt="images/binary-search-tree2"/>
<p class="content-p"><b>لم يتم العثور على 4 لذلك سيتم الانتقال إلى الشجرة  الفرعية اليسرى للعقدة 8</b></p>
<br/><img class="content-image" src="/assets/img/algorithms/binary-search-tree3.jpg" alt="images/binary-search-tree3"/>
<p class="content-p"><b> لم يتم العثور على 4 لذلك سيتم الانتقال إلى الشجرة  الفرعية اليمنى للعقدة 3</b></p>
<br/><img class="content-image" src="/assets/img/algorithms/binary-search-tree4.jpg" alt="images/binary-search-tree4"/>
<p class="content-p"><b> لم يتم العثور على 4 لذلك سيتم الانتقال إلى الشجرة  الفرعية اليسرى للعقدة 6</b></p>
<br/><img class="content-image" src="/assets/img/algorithms/binary-search-tree5.jpg" alt="images/binary-search-tree5"/>
<p class="content-p"><b> تم العثور على 4</b></p>
<p class="content-p"><bdi>إذا تم العثور على القيمة تقوم بإعادة القيمة بحيث يتم نشرها في كل خطوة تكرار عودي كما هو موضح في الصورة أدناه
إذا كنت قد لاحظت لقد تم استدعاء ارجاع البحث (struct node*) اربع مرات عندما نقوم بإرجاع إما العقدة الجديدة أو NULL القيمة تعاد مرارا وتكرارا حتى يعيد البحث للجذر النتيجة النهائية 
</bdi></p>
<br/><img class="content-image" src="/assets/img/algorithms/binary-search-tree6.jpg" alt="images/binary-search-tree6"/>
<p class="content-p"><bdi>إذا تم العثور على القيمة في إحدى الأشجار الفرعية يتم نشرها لذلك في النهاية يتم إرجاعها وإلا يتم إرجاع null
وإذا لم يتم العثور على القيمة نصل في النهاية للابن الأيمن أو الايسر لعقدة طرفية وهي NULL ويتم نشرها وإعادتها
</bdi></p>
 <h4>	:  عملية الإضافة  •</h4>
 <p class="content-p"><bdi>عملية الإضافة في الموقع الصحيح تشبه عملية البحث لإننا نحاول الحفاظ على القاعدة بحيث الشجرة الفرعية اليسرى أقل من الجذر والشجرة الفرعية اليمنى أكبر من الجذر 
نستمر في الذهاب إلى الشجرة الفرعية اليمنى او الشجرة الفرعية اليسرى اعتمادا على القيمة وعندما نصل إلى نقطة في يسار أو يمين الشجرة الفرعية بحيث تكون null نضع العقدة الجديدة هناك
</bdi></p>
<h4> : الخوارزمية </h4>
<div class="code-box">
<p class="content-p">
<pre style="line-height: 1.5em;">
If node == NULL 
    return createNode(data)
if (data < node->data)
    node->left  = insert(node->left, data);
else if (data > node->data)
    node->right = insert(node->right, data);  
return node;
</pre>
</p>
</div>
<p class="content-p">: الخوارزمية ليست بالبساطة التي نراها لنحاول تصور كيف يمكننا أضافة رقم إلى شجرة بحث ثنائية موجودة </p>
<br/><img class="content-image" src="/assets/img/algorithms/binary-search-tree7.jpg" alt="images/binary-search-tree7"/>
<p class="content-p"><b> 8<4 لذلك سيتم الانتقال إلى الابن الأيسر ل8 </b></p>
<br/><img class="content-image" src="/assets/img/algorithms/binary-search-tree8.jpg" alt="images/binary-search-tree8"/>
<p class="content-p"><b> 4>3  لذلك سيتم الانتقال إلى الابن الأيمن ل3  </b></p>
<br/><img class="content-image" src="/assets/img/algorithms/binary-search-tree9.jpg" alt="images/binary-search-tree9"/>
<p class="content-p"><b> 6>4 لذلك سيتم الانتقال إلى الابن الأيسر ل6</b></p>
<br/><img class="content-image" src="/assets/img/algorithms/binary-search-tree10.jpg" alt="images/binary-search-tree10"/>
<p class="content-p"><b>إضافة 4 كأبن أيسر ل6</b></p>
<p class="content-p"><bdi>لقد قمنا بإرفاق العقدة لكننا مازلنا نحتاج للخروج من التابع بدون إحداث ضرر لبقية الشجرة حيث أن إرجاع العقدة في النهاية يأتي في متناول اليدين في حالة NULL يتم إرجاع العقدة المنشأة حديثا وترفق على العقدة الأصل وإلا يتم ارجاع نفس العقدة دون أي تغيير حتى يتم إعادة الجذر 
هذا يجعل إذا قمنا بالعودة إلى أعلى شجرة باقي اتصالات العقد لا تتغير 
</bdi></p>
<br/><img class="content-image" src="/assets/img/algorithms/binary-search-tree11.jpg" alt="images/binary-search-tree11"/>
<p class="content-p">الصورة تظهر أهمية ارجاع عنصر الجذر في النهاية لذلك العناصر لا تخسر مواقعها خلال خطوة العودية التصاعدية </p>
 <h4>	:  عملية الحذف   •</h4>
 <p class="content-p"><b>
 : هناك ثلاث حالات لحذف عقدة من شجرة البحث الثنائي 
 </b></p>
 <h4><bdi> 1.	الحالة الأولى :</bdi></h4>
 <p class="content-p">
 العقدة التي نريد حذفها هي عقدة طرفية في هذه الحالة عملية الحذف تكون سهلة من الشجرة
 </p>
 <br/><img class="content-image" src="/assets/img/algorithms/binary-search-tree12.jpg" alt="images/binary-search-tree12"/>
 <p class="content-p"><b>نريد حذف 4</b></p>
 <br/><img class="content-image" src="/assets/img/algorithms/binary-search-tree13.jpg" alt="images/binary-search-tree13"/>
  <p class="content-p"><b>تم حذف العقدة</b></p>
  <h4><bdi> 2.	الحالة الثانية :</bdi></h4>
  <p class="content-p"><bdi>
  في هذه الحالة العقدة التي نريد حذفها لديها ابن وحيد في هذه الحالة نتبه هذه الخطوات :
<br>
•	استبدال تلك العقدة بالعقدة التابعة لها 
<br>
•	إزالة العقدة الابن من موقعها الأصلي 
</bdi>
</p>
<br/><img class="content-image" src="/assets/img/algorithms/binary-search-tree14.jpg" alt="images/binary-search-tree14"/>
<p class="content-p"><b> 6 نريد حذفها</b></p>
<br/><img class="content-image" src="/assets/img/algorithms/binary-search-tree15.jpg" alt="images/binary-search-tree15"/>
<p class="content-p"><b> نسخ قيمة العقدة الابن للعقدة وحذف الابن </b></p>
<br/><img class="content-image" src="/assets/img/algorithms/binary-search-tree16.jpg" alt="images/binary-search-tree16"/>
<p class="content-p"><b> الشجرة النهائية</b></p>
<h4><bdi>   3.	الحالة الثالثة :</bdi></h4>
<p class="content-p"><bdi>
 في هذه الحالة العقدة نريد جذفها لديها عقدتين أبناء في هذه الحالة نقوم باتباع الخطوات التالية :
<br>
•	نقوم بإيجاد العقدة التي تلي في القيمة العقدة التي نريد حذفها 
<br>
•	نستبدل العقدة التي نريد حذفها مع العقدة التي تليها في القيمة 
<br>
•	نحذف العقدة التي تليها في القيمة من موقعها الأصلي 
</bdi></p>
<br/><img class="content-image" src="/assets/img/algorithms/binary-search-tree17.jpg" alt="images/binary-search-tree17"/>
<p class="content-p"><b> 3 هي التي نريد حذفها</b></p>
<br/><img class="content-image" src="/assets/img/algorithms/binary-search-tree18.jpg" alt="images/binary-search-tree18"/>
<p class="content-p"><b> نقوم بنسخة قيمة العنصر الذي يلي في القيمة (4) العنصر الذي نريد حذفه    </b></p>
<br/><img class="content-image" src="/assets/img/algorithms/binary-search-tree19.jpg" alt="images/binary-search-tree19"/>
<p class="content-p"><b> حذف العنصر الذي يلي في القيمة العنصر المراد حذفه   </b></p>
<h4><bdi>   التطبيق العملي  :</bdi></h4>
<div class="code-box">
<p class="content-p">
<pre style="line-height: 1.5em;">
// Binary Search Tree operations in C++
#include <bits/stdc++.h>
using namespace std;

struct node {
  int key;
  struct node *left, *right;
};

// Create a node
struct node *newNode(int item) {
  struct node *temp = (struct node *)malloc(sizeof(struct node));
  temp->key = item;
  temp->left = temp->right = NULL;
  return temp;
}

// Inorder Traversal
void inorder(struct node *root) {
  if (root != NULL) {
    // Traverse left
    inorder(root->left);

    // Traverse root
    cout << root->key << " -> ";

    // Traverse right
    inorder(root->right);
  }
}

// Insert a node
struct node *insert(struct node *node, int key) {
  // Return a new node if the tree is empty
  if (node == NULL) return newNode(key);

  // Traverse to the right place and insert the node
  if (key < node->key)
    node->left = insert(node->left, key);
  else
    node->right = insert(node->right, key);

  return node;
}

// Find the inorder successor
struct node *minValueNode(struct node *node) {
  struct node *current = node;

  // Find the leftmost leaf
  while (current && current->left != NULL)
    current = current->left;

  return current;
}

// Deleting a node
struct node *deleteNode(struct node *root, int key) {
  // Return if the tree is empty
  if (root == NULL) return root;

  // Find the node to be deleted
  if (key < root->key)
    root->left = deleteNode(root->left, key);
  else if (key > root->key)
    root->right = deleteNode(root->right, key);
  else {
    // If the node is with only one child or no child
    if (root->left == NULL) {
      struct node *temp = root->right;
      free(root);
      return temp;
    } else if (root->right == NULL) {
      struct node *temp = root->left;
      free(root);
      return temp;
    }

    // If the node has two children
    struct node *temp = minValueNode(root->right);

    // Place the inorder successor in position of the node to be deleted
    root->key = temp->key;

    // Delete the inorder successor
    root->right = deleteNode(root->right, temp->key);
  }
  return root;
}

// Driver code
int main() {
  struct node *root = NULL;
  root = insert(root, 8);
  root = insert(root, 3);
  root = insert(root, 1);
  root = insert(root, 6);
  root = insert(root, 7);
  root = insert(root, 10);
  root = insert(root, 14);
  root = insert(root, 4);

  cout << "Inorder traversal: ";
  inorder(root);

  cout << "\nAfter deleting 10\n";
  root = deleteNode(root, 10);
  cout << "Inorder traversal: ";
  inorder(root);
}
</pre>
</p>
</div>
<h4><bdi>    التعقيد الزمني لهذه العمليات : </bdi></h4>
<table>
  <tr>
      <th> الحالة الأسوء</th>
        <th>الحالة المتوسطة</th>
         <th>الحالة الأفضل </th>
          <th>العملية</th>
  </tr>
  <tr>
   <td>O(n)</td>
    <td>O(log n)</td>
    <td>O(log n)</td>
     <td>البحث</td>
  </tr>
  <tr>
   <td>O(n)</td>
    <td>O(log n)</td>
    <td>O(log n)</td>
      <td>لإضافة</td>
  </tr>
    <tr>
   <td>O(n)</td>
    <td>O(log n)</td>
    <td>O(log n)</td>
      <td>لحذف</td>
  </tr>
</table>
<h4><bdi>   تعقيد المساحة : </bdi></h4>
<p class="content-p"><bdi>في كل العمليات يكون تعقيد المساحة O(n)</bdi></p>
<h4><bdi>   تطبيقات شجرة البحث الثنائي : </bdi></h4>
<p class="content-p">
<bdi>
•	في الفهرسة المتعددة المستويات في قواعد البيانات
<br>
•	في التخزين الديناميكي
<br>
•	لإدارة  مناطق الذاكرة الافتراضية في Unix kernel
</bdi></p>