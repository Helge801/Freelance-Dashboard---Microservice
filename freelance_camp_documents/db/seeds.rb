10.times do |i|
  FreelanceDocument.create!(title: "document #{i}",
                            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, ",
                            file_url: "https://docs.google.com/document/d/1VtAobb-sKFsj6GCf7Y_79zF7lm68eT2UgGWZcw4FMxc/edit?usp=sharing",
                            image_url: 'http://www.tribalreport.com/wp-content/uploads/2017/01/freelance.jpg'
                            )
end


