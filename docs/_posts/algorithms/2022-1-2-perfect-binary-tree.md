---
layout: "content"
categories: computer-science algorithms
title:     "   الشجرة الثنائية التامة  "
permalink: /:categories/:title.html
type: 'course'
---
<div class="col-12">
<h2>  perfect  Binary  tree -     الشجرة الثنائية التامة  </h2>
<p class="content-p">هي نوع من الأشجار الثنائية بحيث يكون لكل عقدة داخلية عقدتين أبناء وكل العقد الطرفية تقع في نفس المستوي
</p>
 <br/><img class="content-image" src="/assets/img/algorithms/perfect-binary-tree.jpg" alt="images/perfect-binary-tree"/>
 <p class="content-p"><b> : بشكل تكراري يمكن تعريفها </b></p>
 <p class="content-p"><bdi>
 1.	إذا كانت العقدة ليس لها أبناء فهي شجرة ثنائية تامة بارتفاع h=0
 <br>
2.	إذا كان للعقدة ارتفاع h>0 فتكون شجرة ثنائية تامة إذا كان كل من الأشجار الفرعية هي من ارتفاع h-1 وغير متداخلة .
</bdi>
</p>
<br/><img class="content-image" src="/assets/img/algorithms/perfect-binary-tree-rec.jpg" alt="images/perfect-binary-tree-rec"/>
<h3> : نظرية الشجرة الثنائية التامة </h3>
<p class="content-p"><bdi>
1.	الشجرة الثنائية التامة من ارتفاع h يكون لها (2h + 1 – 1 )من العقد
<br>
2.	الشجرة الثنائية التامة التي لها n عقدة يكون ارتفاعها log(n + 1) – 1 = Θ(ln(n))
<br>
3.	الشجرة الثنائية التامة التي ارتفاعها h تحوي 2h  من العقد الأوراق
<br>
4.	متوسط عمق العقدة في الشجرة الثنائية التامة Θ(ln(n))
<bdi></p>
<p class="content-p"><bdi><b>البرنامج التالي للتحقق إذا كانت الشجرة الثنائية هي شجرة ثنائية تامة perfect binary tree :
</b></bdi></p>
<div class="code-box">
<p class="content-p">
<pre style="line-height: 1.5em;">
// Checking if a binary tree is a perfect binary tree in C++
#include <bits/stdc++.h>
using namespace std;

struct Node {
  int key;
  struct Node *left, *right;
};

int depth(Node *node) {
  int d = 0;
  while (node != NULL) {
    d++;
    node = node->left;
  }
  return d;
}

bool isPerfectR(struct Node *root, int d, int level = 0) {
  if (root == NULL)
    return true;

  if (root->left == NULL && root->right == NULL)
    return (d == level + 1);

  if (root->left == NULL || root->right == NULL)
    return false;

  return isPerfectR(root->left, d, level + 1) &&
       isPerfectR(root->right, d, level + 1);
}

bool isPerfect(Node *root) {
  int d = depth(root);
  return isPerfectR(root, d);
}

struct Node *newNode(int k) {
  struct Node *node = new Node;
  node->key = k;
  node->right = node->left = NULL;
  return node;
}

int main() {
  struct Node *root = NULL;
  root = newNode(1);
  root->left = newNode(2);
  root->right = newNode(3);
  root->left->left = newNode(4);
  root->left->right = newNode(5);
  root->right->left = newNode(6);

  if (isPerfect(root))
    cout << "The tree is a perfect binary tree\n";
  else
    cout << "The tree is not a perfect binary tree\n";
}

</pre>
</p>
</div>
</div>