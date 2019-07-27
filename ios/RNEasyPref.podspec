
Pod::Spec.new do |s|
  s.name         = "RNEasyPref"
  s.version      = "1.0.0"
  s.summary      = "RNEasyPref"
  s.description  = <<-DESC
                  RNEasyPref
                   DESC
  s.homepage     = "https://www.linkedin.com/in/tuan-luong-anh/"
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/author/RNEasyPref.git", :tag => "master" }
  s.source_files  = "RNEasyPref/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

  