from PIL import Image, ImageDraw, ImageFont
import os

def create_icon(size, filename):
    # إنشاء صورة بخلفية خضراء
    img = Image.new('RGB', (size, size), color='#1A4D2E')
    draw = ImageDraw.Draw(img)
    
    # رسم دائرة ذهبية في المنتصف
    circle_size = size // 3
    circle_pos = (size // 2 - circle_size // 2, size // 2 - circle_size // 2, 
                  size // 2 + circle_size // 2, size // 2 + circle_size // 2)
    draw.ellipse(circle_pos, outline='#D4AF37', width=size // 30)
    
    # رسم الهلال (قوس)
    crescent_size = size // 6
    crescent_pos = (size // 2 - crescent_size // 2, size // 4 - crescent_size // 2,
                    size // 2 + crescent_size // 2, size // 4 + crescent_size // 2)
    draw.arc(crescent_pos, start=0, end=360, fill='#D4AF37', width=size // 40)
    
    # حفظ الصورة
    img.save(filename)
    print(f"تم إنشاء {filename}")

# إنشاء الأيقونات
create_icon(192, 'icon-192.png')
create_icon(512, 'icon-512.png')

print("تم إنشاء جميع الأيقونات بنجاح!")
