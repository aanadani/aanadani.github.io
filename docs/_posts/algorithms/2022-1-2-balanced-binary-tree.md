---
layout: "content"
categories: computer-science algorithms
title:     "      الشجرة الثنائية المتوازنة   "
permalink: /:categories/:title.html
type: 'course'
---
<div class="col-12">
<h2>   Balanced Binary  tree -     الشجرة الثنائية  المتوازنة  </h2>
<p class="content-p"><bdi>
هي عبارة عن شجرة ثنائية متوازنة حيث أن ارتفاع كل من الشجرة الفرعية اليمنى والشجرة الفرعية اليسرى لأي عقدة بحيث لا تزيد عن 1
الشروط لارتفاع الشجرة الثنائية متوازنة:
<br>
1.	الفرق بين  الشجرة الفرعية اليمنى و الشجرة الفرعية اليسرى لا يزيد عن 1
<br>
2.	الشجرة الفرعية اليمنى متوازنة
<br>
3.	الشجرة الفرعية اليسرى متوازنة
</bdi>
</p>
<br/><img class="content-image" src="/assets/img/algorithms/balanced-binary-tree1.jpg" alt="images/balanced-binary-tree1"/>
<br/><img class="content-image" src="/assets/img/algorithms/unbalanced-binary-tree2.jpg" alt="images/unbalanced-binary-tree2"/>
<p class="content-P"><bdi><b>
البرنامج التالي للتحقق إذا كانت الشجرة الثنائية هي شجرة ثنائية متوازنة  binary tree balanced:
</b></bdi></p>
<div class="code-box">
<p class="content-p">
<pre style="line-height: 1.5em;">
// Checking if a binary tree is height balanced in C++
#include <bits/stdc++.h>
using namespace std;
#define bool int
class node {
   public:
  int item;
  node *left;
  node *right;
};
// Create anew node
node *newNode(int item) {
  node *Node = new node();
  Node->item = item;
  Node->left = NULL;
  Node->right = NULL;

  return (Node);
}

// Check height balance
bool checkHeightBalance(node *root, int *height) {
  // Check for emptiness
  int leftHeight = 0, rightHeight = 0;

  int l = 0, r = 0;

  if (root == NULL) {
    *height = 0;
    return 1;
  }

  l = checkHeightBalance(root->left, &leftHeight);
  r = checkHeightBalance(root->right, &rightHeight);

  *height = (leftHeight > rightHeight ? leftHeight : rightHeight) + 1;

  if (std::abs(leftHeight - rightHeight >= 2))
    return 0;

  else
    return l && r;
}

int main() {
  int height = 0;

  node *root = newNode(1);
  root->left = newNode(2);
  root->right = newNode(3);
  root->left->left = newNode(4);
  root->left->right = newNode(5);

  if (checkHeightBalance(root, &height))
    cout << "The tree is balanced";
  else
    cout << "The tree is not balanced";
}
</pre>
</p>
</div>
</div>