---
layout: "content"
categories: computer-science algorithms
title:     "   الشجرة الثنائية الكاملة   "
permalink: /:categories/:title.html
type: 'course'
---
<div class="col-12">
<h2>  complete  Binary  tree -     الشجرة الثنائية الكاملة  </h2>
<p class="content-p">
<bdi> 
هي نوع من أنواع الأشجار الثنائية تشبه الأشجار الثنائية الممتلئة مع اثنين من الاختلافات :
<br>
•	يجب ان يكون كل مستوى ممتلئ تماما
<br>
•	يجب أن جميع العناصر الأوراق تميل إلى اليسار 
<br>
•	قد لا يكون للعنصر الأخير من عناصر  الأوراق أشقاء 
</bdi>
</p>

 <br/><img class="content-image" src="/assets/img/algorithms/complete-binary-tree1.jpg" alt="images/complete-binary-tree1"/>
 <p> class="content-p"><b>: بعض الأمثلة التي توضح الفرق </b></p>
<br/><img class="content-image" src="/assets/img/algorithms/complete-binary-tree2.jpg" alt="images/complete-binary-tree2"/>
<br/><img class="content-image" src="/assets/img/algorithms/complete-binary-tree3.jpg" alt="images/complete-binary-tree3"/>
<br/><img class="content-image" src="/assets/img/algorithms/complete-binary-tree-4.jpg" alt="images/complete-binary-tree4"/>
<p class="content-p"><b> : كيف يتم إنشاء شجرة ثنائية كاملة complete binary tree </b></p>
<p class="content-p"><bdi>1)	تحديد العنصر الأول من القائمة ليكون جذر الشجرة</bdi></p>
<br/><img class="content-image" src="/assets/img/algorithms/complete-binary-tree-creation-1.jpg" alt="images/complete-binary-tree-creation-1"/>
<p class="content-p"><bdi>2)	وضع العنصر الثاني الأبن الأيسر للجذر والعنصر الثالث الابن الأيمن للجذر </bdi></p>
<br/><img class="content-image" src="/assets/img/algorithms/complete-binary-tree-creation-2.jpg" alt="images/complete-binary-tree-creation-2"/>
<p class="content-p"><bdi> 3)	وضع العنصرين التاليين كأبناء للعقدة اليسرى في المستوى الثاني مرة أخرى وضع العنصرين التتالين كأبناء للعقدة اليمنى في المستوى الثاني </bdi></p>
<p class="content-p"><bdi> 4)	استمر في التكرار حتى الوصول إلى العنصر الأخير </bdi></p>
<br/><img class="content-image" src="/assets/img/algorithms/complete-binary-tree-creation-3.jpg" alt="images/complete-binary-tree-creation-3"/>
<p class="content-p"><bdi><b>
البرنامج التالي للتحقق إذا كانت الشجرة الثنائية هي شجرة ثنائية كاملة complete binary tree :</b></bdi></p>
<div class="code-box">
<p class="content-p">
<pre style="line-height: 1.5em;">
// Checking if a binary tree is a complete binary tree in C++
#include <bits/stdc++.h>
using namespace std;

struct Node {
  int key;
  struct Node *left, *right;
};

// Create node
struct Node *newNode(char k) {
  struct Node *node = (struct Node *)malloc(sizeof(struct Node));
  node->key = k;
  node->right = node->left = NULL;
  return node;
}

// Count the number of nodes
int countNumNodes(struct Node *root) {
  if (root == NULL)
    return (0);
  return (1 + countNumNodes(root->left) + countNumNodes(root->right));
}

// Check if the tree is a complete binary tree
bool checkComplete(struct Node *root, int index, int numberNodes) {
  
  // Check if the tree is empty
  if (root == NULL)
    return true;

  if (index >= numberNodes)
    return false;

  return (checkComplete(root->left, 2 * index + 1, numberNodes) && checkComplete(root->right, 2 * index + 2, numberNodes));
}

int main() {
  struct Node *root = NULL;
  root = newNode(1);
  root->left = newNode(2);
  root->right = newNode(3);
  root->left->left = newNode(4);
  root->left->right = newNode(5);
  root->right->left = newNode(6);

  int node_count = countNumNodes(root);
  int index = 0;

  if (checkComplete(root, index, node_count))
    cout << "The tree is a complete binary tree\n";
  else
    cout << "The tree is not a complete binary tree\n";
}
</pre>
</p>
</div>
<p class="content-p"><bdi><b>العلاقة بين عناصر الشجرة و indexes الخاص بالمصفوفة :</b></bdi></p>
<p class="content-p"><bdi>الشجرة الثنائية الكاملة تمتلك خاصية مهمة التي يمكننا استخدامها للعثور على الأبناء والآباء لأي عقدة 
إذا كان index لأي عنصر من المصفوفة هو i,العنصر الذي يكون له index هو  2i+1 سوف يصبح الابن الأيسر والعنصر الذي يكون له index  هو 2i+2 سيصبح الابن الأيمن وأيضا الآباء لأي عنصر الذي يكون index  هو  iيعطى بالحد الأدنى ل (i-1)/2.
</bdi></p>
<p class="content-p"><b>
 : دعنا نختبر ذلك 
</b></p>
<div class="code-box">
<p class="content-p">
<pre style="line-height: 1.5em;">
Left child of 1 (index 0)
= element in (2*0+1) index 
= element in 1 index 
= 12


Right child of 1
= element in (2*0+2) index
= element in 2 index 
= 9

Similarly,
Left child of 12 (index 1)
= element in (2*1+1) index
= element in 3 index
= 5

Right child of 12
= element in (2*1+2) index
= element in 4 index
= 6
Parent of 9 (position 2) 
= (2-1)/2 
= ½ 
= 0.5
~ 0 index 
= 1

Parent of 12 (position 1) 
= (1-1)/2 
= 0 index 
= 1

</pre>
</p>
</div>
<h3> : تطبيقات الشجرة الثنائية الكاملة </h3>
<p class="content-p"><bdi>
•	الكومة او ما يسمى heap
<br>
•	خوارزمية heap sort
</bdi></p>
</div>
