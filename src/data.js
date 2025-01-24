import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, path: "/", text: "Home" }, // Change href to path for React Router
  { id: 2, path: "/quizzes", text: "Quizzes" },
  { id: 3, path: "/courses", text: "Courses" },
  { id: 4, path: "/contact", text: "Contact Us" },
  { id: 5, path: "/blog", text: "Blog" },
];

export const socialLinks = [
  { id: 1, href: "https://facebook.com/kanmed", icon: "fab fa-facebook" },
  { id: 2, href: "https://twitter.com/kanmed", icon: "fab fa-twitter" },
  {
    id: 3,
    href: "https://linkedin.com/company/kanmed",
    icon: "fab fa-linkedin",
  },
  { id: 4, href: "https://instagram.com/kanmed", icon: "fab fa-instagram" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-brain fa-fw", // Icon for Anatomy
    title: "Anatomy",
    text: "Explore the human body’s structure in detail, including bones, muscles, organs, and tissues.",
    path: "/anatomy",
  },
  {
    id: 2,
    icon: "fas fa-heartbeat fa-fw", // Icon for Physiology
    title: "Physiology",
    text: "Understand the functions of the body’s systems and how they work together to maintain homeostasis.",
    path: "/physiology",
  },
  {
    id: 3,
    icon: "fas fa-flask fa-fw", // Icon for Pharmacology
    title: "Pharmacology",
    text: "Learn the science of drugs and their effects on the human body, from absorption to excretion.",
    path: "/pharmacology",
  },
  {
    id: 4,
    icon: "fas fa-virus fa-fw", // Icon for Microbiology
    title: "Microbiology",
    text: "Study microorganisms, their role in health and disease, and the principles of infection control.",
    path: "/microbiology",
  },
  {
    id: 5,
    icon: "fas fa-stethoscope fa-fw", // Icon for Medical Ethics
    title: "Medical Ethics",
    text: "Delve into the moral principles that govern the practice of medicine and healthcare.",
    path: "/ethics",
  },
  {
    id: 6,
    icon: "fas fa-syringe fa-fw", // Icon for Immunology
    title: "Immunology",
    text: "Learn about the immune system, immune responses, and how the body defends itself against infections.",
    path: "/immunology",
  },
];

export const lessons = [
  {
    id: 1,
    image: tour1, // Image for Anatomy 101
    date: "January 26th, 2025", // Start date for lesson
    title: "Anatomy 101",
    info: `Learn the basics of human anatomy, covering the skeletal, muscular, and organ systems. This lesson will lay the foundation for understanding how the body functions.`,
    location: "Online",
    duration: 6, // Duration in hours
    cost: 120, // Lesson cost
  },
  {
    id: 2,
    image: tour2, // Image for Physiology Basics
    date: "February 1st, 2025",
    title: "Physiology Basics",
    info: `Explore the physiological processes that keep the human body functioning, focusing on systems like the cardiovascular, respiratory, and nervous systems.`,
    location: "Hybrid",
    duration: 8,
    cost: 150,
  },
  {
    id: 3,
    image: tour3, // Image for Medical Ethics
    date: "March 15th, 2025",
    title: "Medical Ethics 101",
    info: `Understand the ethical considerations in medicine, including patient rights, confidentiality, and professional responsibility.`,
    location: "In-Class",
    duration: 5,
    cost: 100,
  },
  {
    id: 4,
    image: tour4, // Image for Pathology Introduction
    date: "April 5th, 2025",
    title: "Pathology Introduction",
    info: `Get an introduction to pathology, focusing on the study of diseases, how they affect the body, and diagnostic techniques.`,
    location: "Online",
    duration: 7,
    cost: 180,
  },
];

export const anatomyTopics = {
  year1: [
    {
      id: 1,
      title: "Introduction to Human Anatomy",
      description: "Basic overview of human body systems.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
      content: `
        <h2>Overview</h2>
        <p>Human anatomy is the branch of biology that studies the structure of the human body. The term anatomy comes from the Greek words ana- (up, throughout) and temnein (to cut). It is concerned with the physical structures and components of the body, including the organs, tissues, and cells, and how they are organized and function together.</p>

        <h2>Lesson Content</h2>
        <h3>1. What is Anatomy?</h3>
        <p>Anatomy is the study of the structure and parts of organisms. In human anatomy, we focus on how the body is organized, from the smallest structures (cells) to complex organs and systems. It is essential for understanding how the body works, and how different organs and systems cooperate to maintain health.</p>

        <h3>2. Levels of Organization</h3>
        <p>The human body is highly organized and is studied at different levels:</p>
        <ul>
          <li><strong>Chemical Level:</strong> Involves atoms and molecules that form the building blocks of life (e.g., water, proteins, lipids, and carbohydrates).</li>
          <li><strong>Cellular Level:</strong> Cells are the basic units of life, and all functions of life occur at the cellular level. Each cell has a specific function depending on its type (e.g., muscle cells, nerve cells).</li>
          <li><strong>Tissue Level:</strong> A tissue is a group of similar cells working together to perform a specific function. Four main types of tissues exist: epithelial, connective, muscle, and nervous.</li>
          <li><strong>Organ Level:</strong> An organ is made up of different tissues working together to perform a specific function. For example, the heart is an organ made up of muscle tissue, connective tissue, and nervous tissue.</li>
          <li><strong>Organ System Level:</strong> Organ systems are groups of organs that work together to perform a broad function. For example, the cardiovascular system includes the heart, blood vessels, and blood.</li>
          <li><strong>Organism Level:</strong> The highest level of organization, where all systems of the body work together to maintain life and health.</li>
        </ul>

        <h3>3. Major Body Systems</h3>
        <p>The human body consists of several major organ systems, each responsible for a specific function:</p>
        <ul>
          <li><strong>Skeletal System:</strong> Composed of bones and joints, the skeletal system provides structure to the body, protects internal organs, and allows movement. It also stores minerals and produces blood cells in bone marrow.</li>
          <li><strong>Muscular System:</strong> This system allows for movement through skeletal muscles, helps maintain posture, and produces heat.</li>
          <li><strong>Nervous System:</strong> The brain, spinal cord, and nerves make up the nervous system. It controls body activities by transmitting signals, and it is essential for receiving and processing sensory information.</li>
          <li><strong>Cardiovascular System:</strong> Comprising the heart and blood vessels, the cardiovascular system transports oxygen, nutrients, and hormones throughout the body and helps remove waste products.</li>
          <li><strong>Respiratory System:</strong> The lungs and airways form the respiratory system. It is responsible for gas exchange, bringing oxygen into the body and expelling carbon dioxide.</li>
          <li><strong>Digestive System:</strong> The digestive system processes food, absorbs nutrients, and eliminates waste. It includes organs like the stomach, intestines, liver, and pancreas.</li>
          <li><strong>Endocrine System:</strong> This system consists of glands that secrete hormones, which regulate processes such as metabolism, growth, and mood.</li>
          <li><strong>Lymphatic/Immune System:</strong> This system helps defend the body against pathogens, while also maintaining fluid balance and absorbing fats from the digestive system.</li>
          <li><strong>Integumentary System:</strong> The skin, hair, and nails make up this system. It protects the body, regulates temperature, and provides sensory information.</li>
          <li><strong>Urinary System:</strong> The kidneys, bladder, and urinary tract filter waste from the blood, regulate fluid balance, and control electrolytes.</li>
          <li><strong>Reproductive System:</strong> The male and female reproductive systems are responsible for producing offspring.</li>
        </ul>

        <h3>4. Anatomical Terminology</h3>
        <p>To study anatomy effectively, it’s important to understand some key terms:</p>
        <ul>
          <li><strong>Anterior (ventral):</strong> Toward the front of the body.</li>
          <li><strong>Posterior (dorsal):</strong> Toward the back of the body.</li>
          <li><strong>Superior:</strong> Toward the head or upper part of the body.</li>
          <li><strong>Inferior:</strong> Away from the head, or toward the lower part of the body.</li>
          <li><strong>Medial:</strong> Toward the midline of the body.</li>
          <li><strong>Lateral:</strong> Away from the midline of the body.</li>
          <li><strong>Proximal:</strong> Closer to the point of attachment (used for limbs).</li>
          <li><strong>Distal:</strong> Farther from the point of attachment (used for limbs).</li>
          <li><strong>Superficial:</strong> Near the surface of the body.</li>
          <li><strong>Deep:</strong> Away from the surface of the body.</li>
        </ul>

        <h3>5. The Concept of Homeostasis</h3>
        <p>Homeostasis is the process by which the body maintains a stable internal environment despite external changes. This concept is vital for understanding how systems work together to maintain health. Examples of homeostasis include regulating body temperature, blood pH, and blood pressure.</p>
      `,
      recap:
        "In this lesson, we've introduced the basics of human anatomy, from its hierarchical organization to the various systems that maintain life. Understanding anatomy is fundamental to all areas of health and medical sciences, and it provides the foundation for more advanced studies in physiology, pathology, and medicine.",
      resources: [
        {
          title:
            "Interactive Human Anatomy Atlas: Explore the human body in 3D.",
          url: "https://example.com/intro-anatomy",
        },
        {
          title:
            "YouTube Video on Human Anatomy: Overview of body systems and their functions.",
          url: "https://example.com/intro-anatomy",
        },
        {
          title:
            "Gray's Anatomy for Students by Richard Drake, Wayne Vogl, and Adam W. M. Mitchell.",
          url: "https://example.com/intro-anatomy",
        },
      ],
    },
    {
      id: 2,
      title: "Skeletal System",
      description: "Detailed study of bones and joints.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
      content: `<h2>Overview</h2>
<p>The skeletal system is composed of bones, joints, and cartilage, and it provides the structural framework for the body. It is responsible for protecting internal organs, enabling movement, storing and releasing minerals, and producing blood cells. The skeletal system is one of the body's most vital systems for maintaining overall health and function.</p>

<h2>Lesson Content</h2>

<h3>1. What is the Skeletal System?</h3>
<p>The skeletal system is the framework of bones and cartilage that supports the body, protects internal organs, and enables movement. It is the foundation upon which muscles attach to allow movement. The system also plays an essential role in producing red blood cells (hematopoiesis) and storing essential minerals like calcium and phosphorus.</p>

<h3>2. Structure of the Skeletal System</h3>
<p>The skeletal system consists of bones, cartilage, and joints. The bones form the rigid structure, while cartilage provides flexible support at certain areas like the joints. Ligaments are connective tissues that connect bones to one another, while tendons connect muscles to bones. The system is categorized into two main parts:</p>
<ul>
  <li><strong>Axial Skeleton:</strong> Includes the bones along the body's long axis, such as the skull, vertebral column (spine), and rib cage. The axial skeleton supports and protects the brain, spinal cord, and thoracic organs (heart and lungs).</li>
  <li><strong>Appendicular Skeleton:</strong> Comprises the bones of the limbs (arms and legs) and the girdles that attach them to the axial skeleton. This part is responsible for the body's movement.</li>
</ul>

<h3>3. Functions of the Skeletal System</h3>
<p>The skeletal system performs several key functions, which include:</p>
<ul>
  <li><strong>Support:</strong> The skeleton provides structural support for the body, allowing it to stand upright and maintain shape.</li>
  <li><strong>Protection:</strong> The bones protect vital organs, such as the brain, heart, and lungs. For example, the skull protects the brain, and the rib cage shields the heart and lungs.</li>
  <li><strong>Movement:</strong> Bones serve as levers for muscles to act upon, facilitating movement. This is particularly important in the appendicular skeleton, where limbs are connected to the body.</li>
  <li><strong>Mineral Storage:</strong> Bones store essential minerals like calcium and phosphorus. When the body requires these minerals, they are released from the bones into the bloodstream.</li>
  <li><strong>Blood Cell Production:</strong> The red bone marrow in certain bones produces red blood cells, white blood cells, and platelets. This process is known as hematopoiesis.</li>
</ul>

<h3>4. Bone Classification</h3>
<p>Bones can be classified based on their shape, and there are four main categories:</p>
<ul>
  <li><strong>Long Bones:</strong> These bones are longer than they are wide and are typically found in the limbs (e.g., femur, humerus). They are crucial for movement and provide support.</li>
  <li><strong>Short Bones:</strong> These are roughly cube-shaped and provide stability with limited movement (e.g., carpals in the wrist, tarsals in the ankle).</li>
  <li><strong>Flat Bones:</strong> These bones are thin and flat and serve to protect organs or provide surface area for muscle attachment (e.g., skull, ribs, sternum).</li>
  <li><strong>Irregular Bones:</strong> These have complex shapes and are typically found in areas that do not fit into the other categories (e.g., vertebrae, facial bones).</li>
</ul>

<h3>5. Types of Joints in the Skeletal System</h3>
<p>Joints are where two or more bones meet. Joints can be classified based on their structure or function:</p>
<ul>
  <li><strong>Fibrous Joints:</strong> These joints are connected by fibrous tissue and have little or no movement (e.g., sutures in the skull).</li>
  <li><strong>Cartilaginous Joints:</strong> In these joints, the bones are connected by cartilage, allowing for limited movement (e.g., the intervertebral discs in the spine).</li>
  <li><strong>Synovial Joints:</strong> These are the most common and freely movable joints in the body. They are surrounded by a synovial capsule and contain synovial fluid, which lubricates the joint (e.g., knee, elbow, hip, shoulder).</li>
</ul>

<h3>6. Bone Development and Growth</h3>
<p>Bone growth and development occur through a process called ossification. There are two main types of ossification:</p>
<ul>
  <li><strong>Endochondral Ossification:</strong> This process involves the formation of bone from a cartilage model and is the way most bones develop.</li>
  <li><strong>Intramembranous Ossification:</strong> This process involves the direct formation of bone from connective tissue and is how flat bones (such as the skull) form.</li>
</ul>
<p>Bone growth continues until the end of adolescence when the growth plates close. After that, bones can still undergo remodeling throughout life.</p>

<h3>7. Common Skeletal System Disorders</h3>
<p>The skeletal system can be affected by various disorders that can lead to pain, dysfunction, or even structural changes. Some common conditions include:</p>
<ul>
  <li><strong>Osteoporosis:</strong> A condition characterized by weakened bones that are more prone to fractures due to a decrease in bone density.</li>
  <li><strong>Arthritis:</strong> Inflammation of the joints, which can lead to pain and reduced mobility. Common types include osteoarthritis and rheumatoid arthritis.</li>
  <li><strong>Fractures:</strong> Breaks or cracks in bones caused by trauma or underlying conditions like osteoporosis.</li>
  <li><strong>Scoliosis:</strong> An abnormal curvature of the spine.</li>
</ul>

<h3>8. Anatomical Terminology for the Skeletal System</h3>
<p>To study the skeletal system effectively, it’s important to understand the following terms:</p>
<ul>
  <li><strong>Proximal:</strong> Closer to the attachment point of the limb to the trunk (e.g., the shoulder is proximal to the elbow).</li>
  <li><strong>Distal:</strong> Farther from the attachment point of the limb to the trunk (e.g., the wrist is distal to the elbow).</li>
  <li><strong>Medial:</strong> Toward the midline of the body (e.g., the sternum is medial to the ribs).</li>
  <li><strong>Lateral:</strong> Away from the midline of the body (e.g., the ears are lateral to the eyes).</li>
  <li><strong>Superior:</strong> Above or toward the head (e.g., the clavicle is superior to the ribs).</li>
  <li><strong>Inferior:</strong> Below or toward the feet (e.g., the femur is inferior to the pelvis).</li>
</ul>

<h3>9. The Concept of Bone Remodeling</h3>
<p>Bone remodeling is a continuous process where old bone tissue is replaced with new bone tissue. This process helps maintain the strength and integrity of bones and is essential for healing after fractures. The balance between bone resorption (removal) and bone formation can be influenced by factors like age, nutrition, and physical activity.</p>

<h3>Recap</h3>
<p>In this lesson, we've explored the key functions and components of the skeletal system. From bone structure and classification to its critical role in movement, protection, and mineral storage, the skeletal system is a fundamental part of human physiology. Understanding the skeletal system is essential for appreciating how the body maintains its form and performs its various functions.</p>

<h3>Resources</h3>
<ul>
  <li><a href="https://example.com/skeletal-anatomy">Interactive Skeletal System Model: Explore 3D models of the skeletal system.</a></li>
  <li><a href="https://example.com/3d-bone-anatomy">3D Anatomy of the Human Skeleton: Learn about individual bones and joints.</a></li>
  <li><a href="https://example.com/skeletal-textbook">"Human Anatomy & Physiology" by Elaine Marieb</a></li>
</ul>
`,
      recap:
        "In this lesson, we've explored the structure and functions of the skeletal system, including how it provides support, protection, enables movement, stores minerals, and produces blood cells. We’ve also learned about bone classification, joint types, and bone development. Understanding the skeletal system is essential for comprehending how the body maintains its structure and performs vital functions like movement and protection of internal organs.",
      resources: [
        {
          title:
            "Interactive Skeletal System Model: Explore the human skeleton in 3D.",
          url: "https://example.com/intro-anatomy",
        },
        {
          title:
            "YouTube Video on Skeletal System: An in-depth look at bones, joints, and their functions.",
          url: "https://example.com/intro-anatomy",
        },
        {
          title:
            "Human Anatomy by Elaine Marieb: A detailed guide to the structure and functions of the skeletal system.",
          url: "https://example.com/intro-anatomy",
        },
      ],
    },
    {
      id: 3,
      title: "Muscular System",
      description: "Study of muscles and their functions.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
      content:`<h2>Overview</h2>
<p>The muscular system is a biological system consisting of muscles and tendons that allow movement of the body and its parts. The system is also involved in maintaining posture and generating heat. Muscles contract and work in pairs to produce movement. There are three main types of muscles: skeletal, smooth, and cardiac, each playing a unique role in the body.</p>

<h2>Lesson Content</h2>

<h3>1. What is the Muscular System?</h3>
<p>The muscular system is responsible for body movement and stability. Muscles contract in response to stimuli from the nervous system, allowing us to move, maintain posture, and perform vital functions like breathing. This system includes over 600 muscles in the body, and each muscle works in coordination with others to produce efficient movement and bodily functions.</p>

<h3>2. Types of Muscles</h3>
<p>The muscular system is divided into three main types of muscles:</p>
<ul>
  <li><strong>Skeletal Muscles:</strong> These muscles are attached to bones by tendons and are responsible for voluntary movement. Skeletal muscles allow us to move our limbs, face, and torso. They are controlled by the somatic nervous system.</li>
  <li><strong>Smooth Muscles:</strong> Found in the walls of internal organs such as the stomach, intestines, and blood vessels, smooth muscles are involuntary and responsible for movements like peristalsis (the movement of food through the digestive system) and the constriction and relaxation of blood vessels.</li>
  <li><strong>Cardiac Muscles:</strong> Located only in the heart, cardiac muscles are involuntary muscles that enable the heart to beat and pump blood throughout the body. Cardiac muscle contractions are regulated by the autonomic nervous system.</li>
</ul>

<h3>3. Muscle Function and Movement</h3>
<p>Muscle contractions are the driving force behind all movement in the body. Muscles work by contracting and relaxing in response to signals from the nervous system. There are two basic types of muscle contractions:</p>
<ul>
  <li><strong>Concentric Contraction:</strong> The muscle shortens as it contracts, producing movement (e.g., lifting a weight).</li>
  <li><strong>Eccentric Contraction:</strong> The muscle lengthens while contracting, helping to slow down movement or resist a force (e.g., lowering a weight back down).</li>
</ul>
<p>Muscles usually work in pairs: while one muscle contracts (agonist), the opposing muscle relaxes (antagonist) to allow smooth movement. This principle is known as reciprocal inhibition.</p>

<h3>4. Muscle Structure</h3>
<p>Each muscle is made up of individual muscle fibers, and these fibers are organized into bundles called fascicles. The muscle fibers themselves contain myofibrils, which are made up of smaller units called sarcomeres. Sarcomeres are the basic contractile units of muscle and contain two primary proteins: actin (thin filaments) and myosin (thick filaments). When these proteins interact, they cause the muscle to contract.</p>

<h3>5. Muscular Disorders</h3>
<p>Several disorders can affect the muscular system, ranging from minor muscle strains to more severe conditions such as:</p>
<ul>
  <li><strong>Muscle Strains:</strong> Occur when muscles are overstretched or torn, often from overuse or improper movement.</li>
  <li><strong>Muscular Dystrophy:</strong> A genetic disorder that causes progressive weakness and loss of muscle mass.</li>
  <li><strong>Fibromyalgia:</strong> A condition characterized by widespread muscle pain and tenderness.</li>
  <li><strong>Myasthenia Gravis:</strong> An autoimmune disease that causes weakness in the skeletal muscles, often affecting the eyes and face.</li>
</ul>

<h3>6. The Role of Exercise in Muscle Health</h3>
<p>Regular exercise is crucial for maintaining muscle strength and flexibility. Both aerobic exercises (like walking or running) and resistance training (such as lifting weights) help build muscle mass and improve muscle function. Stretching exercises help maintain flexibility and prevent muscle injuries.</p>

<h3>7. Anatomical Terminology in Muscular System</h3>
<p>To study muscles effectively, it’s important to understand key anatomical terms used to describe muscle location and function:</p>
<ul>
  <li><strong>Origin:</strong> The fixed attachment point of a muscle, usually on a bone.</li>
  <li><strong>Insertion:</strong> The movable attachment point of a muscle.</li>
  <li><strong>Prime Mover (Agonist):</strong> The muscle responsible for the majority of movement in a particular action.</li>
  <li><strong>Antagonist:</strong> The muscle that opposes the action of the agonist muscle.</li>
  <li><strong>Synergist:</strong> Muscles that assist the prime mover in performing an action.</li>
  <li><strong>Flexion:</strong> Decreasing the angle between two body parts.</li>
  <li><strong>Extension:</strong> Increasing the angle between two body parts.</li>
</ul>

<h3>8. The Concept of Muscle Tone</h3>
<p>Muscle tone refers to the continuous and passive partial contraction of muscles, which helps maintain posture and is essential for balance. Even when not consciously contracting a muscle, the body maintains a small level of muscle activity.</p>

<h3>9. The Nervous System and Muscles</h3>
<p>Muscle movement is controlled by the nervous system, which sends signals from the brain to muscles through motor neurons. These signals are transmitted at the neuromuscular junction, where the motor neuron meets the muscle fiber. This process allows muscles to contract and perform voluntary and involuntary movements.</p>
`,
recap: "In this lesson, we have introduced the basics of the muscular system, from its structure and function to the different types of muscles and their roles in movement. We have also explored muscle health, common disorders, and how exercise plays a key role in maintaining muscle strength and function. Understanding the muscular system is vital for anyone studying human physiology, sports medicine, or physical therapy.",
resources: [
  {
    title:
      "Interactive 3D Muscle Model: Explore muscles and their functions in detail.",
    url: "https://example.com/intro-anatomy",
  },
  {
    title:
      "YouTube Video on the Muscular System",
    url: "https://example.com/intro-anatomy",
  },
  {
    title:
      "Muscle: The Remarkable Story of the Human Body's Most Essential Organ by Jeffrey S. L. N.",
    url: "https://example.com/intro-anatomy",
  },
],
    },
    {
      id: 4,
      title: "Cardiovascular System",
      description: "Heart anatomy and blood circulation.",
      videoUrl: "https://www.youtube.com/embed/d1xHz9zjz4k",
      content:`<h2>Overview</h2>
<p>The cardiovascular system, also known as the circulatory system, is a complex network that includes the heart, blood vessels, and blood. Its primary function is to transport oxygen, nutrients, hormones, and waste products to and from the cells of the body. The cardiovascular system is essential for maintaining homeostasis and enabling various physiological processes that sustain life.</p>

<!-- Placeholder for an image of the cardiovascular system -->
<div class="image-placeholder">
  <img src="path/to/your/image.jpg" alt="Cardiovascular System Overview" />
</div>

<h2>Lesson Content</h2>

<h3>1. What is the Cardiovascular System?</h3>
<p>The cardiovascular system is responsible for circulating blood throughout the body, providing nutrients, oxygen, and waste removal for every cell. It includes the heart, a muscular organ that pumps blood, and a network of blood vessels that carry blood to various parts of the body. The system is essential for maintaining tissue health and for processes such as immune defense, temperature regulation, and nutrient delivery.</p>

<!-- Placeholder for an image of the heart and blood vessels -->
<div class="image-placeholder">
  <img src="path/to/your/image.jpg" alt="Heart and Blood Vessels" />
</div>

<h3>2. Components of the Cardiovascular System</h3>
<p>The cardiovascular system is composed of three main components:</p>
<ul>
  <li><strong>Heart:</strong> The heart is a four-chambered muscular organ that pumps blood throughout the body. It functions as two pumps in one, with the right side pumping deoxygenated blood to the lungs, and the left side pumping oxygenated blood to the rest of the body.</li>
  <li><strong>Blood Vessels:</strong> Blood vessels are the channels through which blood flows. There are three major types:
    <ul>
      <li><strong>Arteries:</strong> Vessels that carry oxygen-rich blood away from the heart to various organs and tissues.</li>
      <li><strong>Veins:</strong> Vessels that return deoxygenated blood back to the heart.</li>
      <li><strong>Capillaries:</strong> Tiny, thin-walled vessels where the exchange of oxygen, nutrients, and waste products occurs between blood and tissues.</li>
    </ul>
  </li>
  <li><strong>Blood:</strong> Blood is the liquid tissue of the cardiovascular system. It contains red blood cells (which carry oxygen), white blood cells (which fight infection), platelets (which help with clotting), and plasma (which transports nutrients, waste, and hormones).</li>
</ul>

<!-- Placeholder for an image showing blood flow through vessels -->
<div class="image-placeholder">
  <img src="path/to/your/image.jpg" alt="Blood Flow through Blood Vessels" />
</div>

<h3>3. Function of the Cardiovascular System</h3>
<p>The cardiovascular system serves several vital functions in the body:</p>
<ul>
  <li><strong>Oxygen and Nutrient Delivery:</strong> Blood transports oxygen and nutrients from the lungs and digestive system to cells throughout the body.</li>
  <li><strong>Waste Removal:</strong> Blood carries waste products, such as carbon dioxide, urea, and metabolic byproducts, away from the cells to be excreted through the lungs, kidneys, and skin.</li>
  <li><strong>Temperature Regulation:</strong> Blood helps maintain body temperature by distributing heat generated in muscles and other tissues.</li>
  <li><strong>Immune Defense:</strong> White blood cells within the blood protect the body against pathogens, and antibodies are transported to help fight infections.</li>
  <li><strong>Hormone Transport:</strong> Blood transports hormones secreted by glands (e.g., insulin, adrenaline) to regulate body functions such as growth, metabolism, and stress responses.</li>
</ul>

<!-- Placeholder for an image showing heart anatomy -->
<div class="image-placeholder">
  <img src="path/to/your/image.jpg" alt="Heart Anatomy" />
</div>

<h3>4. The Heart: Anatomy and Function</h3>
<p>The heart is divided into four chambers:</p>
<ul>
  <li><strong>Right Atrium:</strong> Receives deoxygenated blood from the body through the superior and inferior vena cava.</li>
  <li><strong>Right Ventricle:</strong> Pumps deoxygenated blood to the lungs through the pulmonary artery for oxygenation.</li>
  <li><strong>Left Atrium:</strong> Receives oxygenated blood from the lungs via the pulmonary veins.</li>
  <li><strong>Left Ventricle:</strong> Pumps oxygenated blood to the rest of the body through the aorta.</li>
</ul>

<!-- Placeholder for an image of the heart chambers -->
<div class="image-placeholder">
  <img src="path/to/your/image.jpg" alt="Heart Chambers" />
</div>

<h3>5. Blood Circulation: The Pathway of Blood</h3>
<p>Blood circulation is divided into two primary circuits:</p>
<ul>
  <li><strong>Systemic Circulation:</strong> Oxygen-rich blood is pumped from the left ventricle to the rest of the body through the aorta. It supplies oxygen and nutrients to the tissues and returns deoxygenated blood to the right atrium through the veins.</li>
  <li><strong>Pulmonary Circulation:</strong> Deoxygenated blood is pumped from the right ventricle to the lungs via the pulmonary artery. In the lungs, blood receives oxygen and releases carbon dioxide, returning to the left atrium via the pulmonary veins.</li>
</ul>

<!-- Placeholder for an image showing blood circulation -->
<div class="image-placeholder">
  <img src="path/to/your/image.jpg" alt="Blood Circulation Pathway" />
</div>

<h3>6. Blood Pressure</h3>
<p>Blood pressure is the force that blood exerts on the walls of blood vessels, especially arteries. It is essential for maintaining blood flow throughout the body. Blood pressure is measured as two values:</p>
<ul>
  <li><strong>Systolic Pressure:</strong> The pressure when the heart contracts and pumps blood.</li>
  <li><strong>Diastolic Pressure:</strong> The pressure when the heart is at rest between beats.</li>
</ul>
<p>Normal blood pressure is typically around 120/80 mmHg. High blood pressure (hypertension) can increase the risk of heart disease, stroke, and kidney damage, while low blood pressure (hypotension) can cause dizziness and fainting.</p>

<!-- Placeholder for an image showing blood pressure measurement -->
<div class="image-placeholder">
  <img src="path/to/your/image.jpg" alt="Blood Pressure Measurement" />
</div>

<h3>7. Cardiovascular Disorders</h3>
<p>Several disorders can affect the cardiovascular system, including:</p>
<ul>
  <li><strong>Atherosclerosis:</strong> The buildup of fatty deposits (plaques) on the walls of arteries, leading to reduced blood flow and increased risk of heart attack or stroke.</li>
  <li><strong>Hypertension:</strong> High blood pressure, which can lead to heart disease, kidney damage, and stroke.</li>
  <li><strong>Heart Failure:</strong> A condition where the heart is unable to pump blood effectively, leading to fluid buildup in the lungs and other parts of the body.</li>
  <li><strong>Myocardial Infarction:</strong> Also known as a heart attack, this occurs when a blockage in a coronary artery prevents blood from reaching the heart muscle.</li>
  <li><strong>Arrhythmia:</strong> An irregular heartbeat, which can lead to inefficient blood pumping and other complications.</li>
</ul>

<!-- Placeholder for an image showing cardiovascular disorders -->
<div class="image-placeholder">
  <img src="path/to/your/image.jpg" alt="Cardiovascular Disorders" />
</div>

<h3>8. The Importance of Cardiovascular Health</h3>
<p>Maintaining cardiovascular health is crucial for overall well-being. Lifestyle factors such as a balanced diet, regular exercise, avoiding smoking, and managing stress can help prevent cardiovascular disease. Monitoring blood pressure, cholesterol levels, and maintaining a healthy weight also contribute to heart health.</p>

<!-- Placeholder for an image showing healthy lifestyle for heart health -->
<div class="image-placeholder">
  <img src="path/to/your/image.jpg" alt="Healthy Lifestyle for Heart Health" />
</div>`,
recap: "In this lesson, we’ve covered the essential functions of the cardiovascular system, including the heart’s structure, blood circulation, and the role of blood vessels. We’ve also discussed cardiovascular health, the importance of maintaining a healthy lifestyle, and common disorders that affect the system. Understanding the cardiovascular system is essential for maintaining overall health and preventing cardiovascular diseases",
resources: [
  {
    title:
      "Interactive 3D Cardiovascular System: Explore the anatomy of the heart and blood vessels in detail.",
    url: "https://example.com/intro-anatomy",
  },
  {
    title:
      "YouTube Video on the Cardiovascular System: A comprehensive overview of how the heart and blood vessels function.",
    url: "https://example.com/intro-anatomy",
  },
  {
    title:
      "The Cardiovascular System by John R. Jones: A detailed textbook on the structure and function of the cardiovascular system",
    url: "https://example.com/intro-anatomy",
  },
],
    },
    {
      id: 5,
      title: "Respiratory System",
      description: "Understanding lungs and the process of respiration.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
      content: `<h2>Overview</h2>
<p>The respiratory system is responsible for the exchange of gases (oxygen and carbon dioxide) between the blood and the external environment. It consists of various organs that help in the intake of oxygen, expulsion of carbon dioxide, and regulation of blood pH. The system works closely with the cardiovascular system to distribute oxygen throughout the body.</p>

<h2>Lesson Content</h2>

<h3>1. What is the Respiratory System?</h3>
<p>The respiratory system is a network of organs and tissues that work together to help you breathe. The primary function of the respiratory system is the exchange of gases, such as oxygen and carbon dioxide. Oxygen from the air is transferred into the blood, and carbon dioxide, a waste product, is expelled from the body. This process is vital for the maintenance of homeostasis.</p>

<h3>2. Structure of the Respiratory System</h3>
<p>The respiratory system consists of the following parts:</p>
<ul>
  <li><strong>Nose and Nasal Passages:</strong> The nose filters, warms, and humidifies the air before it enters the lungs. The nasal passages contain mucus and tiny hair-like structures (cilia) that trap dust, bacteria, and other particles.</li>
  <li><strong>Pharynx (Throat):</strong> The pharynx is a muscular tube that connects the nose and mouth to the larynx. It serves as a pathway for both air and food.</li>
  <li><strong>Larynx (Voice Box):</strong> The larynx contains the vocal cords and is responsible for producing sound. It also protects the trachea from food aspiration during swallowing.</li>
  <li><strong>Trachea (Windpipe):</strong> The trachea is a tube that extends from the larynx to the bronchi. It serves as the main airway, delivering air to the lungs.</li>
  <li><strong>Bronchi and Bronchioles:</strong> The trachea divides into two main bronchi (right and left), which enter the lungs and further divide into smaller bronchioles. These airways carry air into the lungs.</li>
  <li><strong>Alveoli:</strong> The alveoli are tiny air sacs in the lungs where gas exchange occurs. Oxygen from the air diffuses into the blood, and carbon dioxide from the blood is transferred into the alveoli to be exhaled.</li>
</ul>

<h3>3. The Process of Breathing</h3>
<p>Breathing is a mechanical process that involves two main phases:</p>
<ul>
  <li><strong>Inhalation (Inspiration):</strong> During inhalation, the diaphragm contracts and moves downward, while the intercostal muscles expand the rib cage. This increases the volume of the thoracic cavity and decreases the pressure inside the lungs, causing air to flow into the lungs.</li>
  <li><strong>Exhalation (Expiration):</strong> During exhalation, the diaphragm relaxes and moves upward, while the rib cage contracts. This decreases the volume of the thoracic cavity and increases the pressure inside the lungs, causing air to be expelled.</li>
</ul>

<h3>4. Gas Exchange and Oxygen Transport</h3>
<p>The primary function of the respiratory system is gas exchange. Oxygen is inhaled into the alveoli, where it diffuses into the capillaries and binds to hemoglobin in red blood cells. The blood transports oxygen to tissues throughout the body. At the same time, carbon dioxide, which is produced by the cells during metabolism, diffuses from the blood into the alveoli to be exhaled.</p>

<h3>5. Regulation of Breathing</h3>
<p>Breathing is regulated by the respiratory center in the brain, located in the medulla oblongata and pons. These centers monitor the levels of oxygen and carbon dioxide in the blood and adjust the rate and depth of breathing accordingly. When carbon dioxide levels rise, the body automatically increases the rate of breathing to expel excess CO2 and restore balance.</p>

<h3>6. Disorders of the Respiratory System</h3>
<p>Various conditions can affect the respiratory system, including:</p>
<ul>
  <li><strong>Asthma:</strong> A chronic condition that causes the airways to become inflamed and narrow, leading to difficulty breathing.</li>
  <li><strong>Chronic Obstructive Pulmonary Disease (COPD):</strong> A group of lung diseases, including emphysema and chronic bronchitis, that cause long-term breathing problems.</li>
  <li><strong>Pneumonia:</strong> An infection of the lungs that causes inflammation and fluid accumulation in the alveoli, leading to difficulty in oxygen exchange.</li>
  <li><strong>Lung Cancer:</strong> A malignant tumor in the lungs that can impair the ability to breathe and may spread to other organs.</li>
</ul>

<h3>7. Anatomical Terminology for the Respiratory System</h3>
<p>To understand the respiratory system's anatomy, it's helpful to know some anatomical terms:</p>
<ul>
  <li><strong>Superior:</strong> Refers to a position higher or above, such as the upper part of the lungs.</li>
  <li><strong>Inferior:</strong> Refers to a position lower or below, such as the lower part of the lungs.</li>
  <li><strong>Medial:</strong> Toward the midline of the body, such as the midline of the trachea.</li>
  <li><strong>Lateral:</strong> Away from the midline of the body, such as the outer parts of the lungs.</li>
  <li><strong>Anterior (Ventral):</strong> Toward the front of the body, such as the front of the ribs.</li>
  <li><strong>Posterior (Dorsal):</strong> Toward the back of the body, such as the back of the diaphragm.</li>
</ul>

<h3>8. The Concept of Homeostasis in the Respiratory System</h3>
<p>The respiratory system plays a crucial role in maintaining homeostasis by regulating the levels of oxygen and carbon dioxide in the blood. By adjusting the rate and depth of breathing, the body ensures that cells receive adequate oxygen and that excess carbon dioxide is removed, thereby helping to maintain the body's pH balance.</p>`
,
recap: "In this lesson, we have covered the structure and function of the respiratory system, from the major organs involved to the process of gas exchange. Understanding how the respiratory system works is essential for appreciating how the body maintains homeostasis and provides oxygen to tissues. It is also important for recognizing how respiratory disorders can disrupt this process",
resources: [
  {
    title:
      "Interactive Respiratory System Atlas: Explore the human respiratory system in 3D.",
    url: "https://example.com/intro-anatomy",
  },
  {
    title:
      "YouTube Video on Respiratory System: Overview of the anatomy and functions of the respiratory system.",
    url: "https://example.com/intro-anatomy",
  },
  {
    title:
      "The Respiratory System by M. S. Ali: Detailed information on respiratory physiology and diseases.",
    url: "https://example.com/intro-anatomy",
  },
],


    },
    {
      id: 6,
      title: "Digestive System",
      description: "Structure and function of the digestive tract.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
      content: `<h2>Overview</h2>
<p>The digestive system is responsible for breaking down food into nutrients, which the body uses for energy, growth, and cell repair. It also eliminates waste products from the body. This complex system involves various organs that work together to process food, absorb nutrients, and expel undigested material.</p>

<!-- Image Placeholder for Digestive System Overview -->
<div class="image-placeholder">
  <img src="path/to/your/image.jpg" alt="Digestive System Overview" />
</div>

<h2>Lesson Content</h2>

<h3>1. What is the Digestive System?</h3>
<p>The digestive system consists of a series of organs that convert food into energy and nutrients, allowing the body to function properly. This process involves mechanical digestion (such as chewing) and chemical digestion (such as enzyme breakdown of food). The system is essential for overall health, providing the nutrients required for bodily functions and maintaining homeostasis.</p>

<!-- Image Placeholder for Digestive Process -->
<div class="image-placeholder">
  <img src="path/to/your/image.jpg" alt="Digestive Process" />
</div>

<h3>2. Structure of the Digestive System</h3>
<p>The digestive system is made up of the digestive tract (also called the alimentary canal) and accessory organs. The main organs involved in digestion include:</p>
<ul>
  <li><strong>Mouth:</strong> The process of digestion begins in the mouth, where food is ingested and broken down by chewing and saliva. Saliva contains enzymes that start breaking down carbohydrates.</li>
  <li><strong>Esophagus:</strong> The esophagus is a muscular tube that moves swallowed food from the mouth to the stomach through a process called peristalsis (rhythmic muscle contractions).</li>
  <li><strong>Stomach:</strong> The stomach is a muscular organ that stores food, mixes it with digestive juices, and begins the process of protein digestion. The stomach’s acidic environment helps break down food and kills harmful bacteria.</li>
  <li><strong>Small Intestine:</strong> The small intestine is the primary site for nutrient absorption. It is composed of three parts: the duodenum, jejunum, and ileum. The majority of digestion and nutrient absorption occurs here.</li>
  <li><strong>Liver:</strong> The liver produces bile, which helps digest fats and neutralizes toxins in the body. It also stores nutrients and releases them into the bloodstream when needed.</li>
  <li><strong>Gallbladder:</strong> The gallbladder stores bile produced by the liver and releases it into the small intestine to aid in the digestion of fats.</li>
  <li><strong>Pancreas:</strong> The pancreas secretes digestive enzymes and bicarbonate into the small intestine. These enzymes break down carbohydrates, proteins, and fats, and the bicarbonate neutralizes stomach acid.</li>
  <li><strong>Large Intestine:</strong> The large intestine absorbs water and salts from the remaining indigestible food matter, forming solid waste (feces) that is eliminated through the rectum and anus.</li>
</ul>

<!-- Image Placeholder for Digestive Organs -->
<div class="image-placeholder">
  <img src="path/to/your/image.jpg" alt="Digestive System Organs" />
</div>

<h3>3. The Process of Digestion</h3>
<p>Digestion is a multi-step process that involves both mechanical and chemical digestion:</p>
<ul>
  <li><strong>Ingestion:</strong> Food is taken into the mouth, where it is chewed and mixed with saliva. This begins the breakdown of carbohydrates.</li>
  <li><strong>Propulsion:</strong> After swallowing, food moves down the esophagus through peristalsis and into the stomach.</li>
  <li><strong>Mechanical Digestion:</strong> In the stomach and small intestine, food is physically broken down by muscle contractions, grinding, and churning.</li>
  <li><strong>Chemical Digestion:</strong> Enzymes and acids in the stomach and small intestine break down food into smaller molecules, such as proteins into amino acids and carbohydrates into simple sugars.</li>
  <li><strong>Absorption:</strong> In the small intestine, the majority of nutrients are absorbed into the bloodstream through tiny finger-like projections called villi and microvilli.</li>
  <li><strong>Defecation:</strong> Undigested food and waste products are moved into the large intestine, where water is absorbed and solid waste is eventually eliminated through the anus.</li>
</ul>

<!-- Image Placeholder for Digestion Process -->
<div class="image-placeholder">
  <img src="path/to/your/image.jpg" alt="Digestion Process" />
</div>

<h3>4. The Role of Enzymes and Bile in Digestion</h3>
<p>Enzymes play a crucial role in breaking down large food molecules into smaller molecules that can be absorbed by the body. Different enzymes target specific types of nutrients:</p>
<ul>
  <li><strong>Amylase:</strong> An enzyme in saliva and pancreatic fluid that breaks down carbohydrates into simple sugars.</li>
  <li><strong>Proteases:</strong> Enzymes that break down proteins into amino acids. Pepsin in the stomach is a key example.</li>
  <li><strong>Lipase:</strong> An enzyme that breaks down fats into fatty acids and glycerol.</li>
  <li><strong>Bile:</strong> Produced by the liver and stored in the gallbladder, bile helps emulsify fats, making them easier to digest by enzymes.</li>
</ul>

<!-- Image Placeholder for Enzymes and Bile -->
<div class="image-placeholder">
  <img src="path/to/your/image.jpg" alt="Enzymes and Bile" />
</div>

<h3>5. Absorption of Nutrients</h3>
<p>The small intestine is the primary site for nutrient absorption. After food is broken down into its component nutrients, they are absorbed through the walls of the small intestine into the bloodstream. The villi and microvilli (tiny hair-like structures) increase the surface area for absorption, allowing for more efficient nutrient uptake.</p>

<!-- Image Placeholder for Nutrient Absorption -->
<div class="image-placeholder">
  <img src="path/to/your/image.jpg" alt="Nutrient Absorption in Small Intestine" />
</div>

<h3>6. Disorders of the Digestive System</h3>
<p>Various conditions can affect the digestive system, impairing its function and disrupting the process of digestion and absorption. Some common disorders include:</p>
<ul>
  <li><strong>Gastroesophageal Reflux Disease (GERD):</strong> A condition in which stomach acid frequently leaks into the esophagus, causing heartburn and discomfort.</li>
  <li><strong>Ulcers:</strong> Open sores that develop on the lining of the stomach or small intestine, often caused by bacterial infection or excessive use of certain medications.</li>
  <li><strong>Inflammatory Bowel Disease (IBD):</strong> Chronic inflammation of the digestive tract, which includes Crohn’s disease and ulcerative colitis.</li>
  <li><strong>Celiac Disease:</strong> An autoimmune disorder in which the ingestion of gluten triggers an immune response that damages the small intestine lining, impairing nutrient absorption.</li>
  <li><strong>Lactose Intolerance:</strong> A condition in which the body is unable to properly digest lactose, leading to digestive discomfort after consuming dairy products.</li>
</ul>

<!-- Image Placeholder for Digestive Disorders -->
<div class="image-placeholder">
  <img src="path/to/your/image.jpg" alt="Digestive Disorders" />
</div>

<h3>7. Anatomical Terminology for the Digestive System</h3>
<p>To understand the digestive system’s anatomy, it's helpful to know some anatomical terms:</p>
<ul>
  <li><strong>Superior:</strong> Toward the top or head, such as the upper part of the stomach.</li>
  <li><strong>Inferior:</strong> Toward the bottom or feet, such as the lower part of the intestines.</li>
  <li><strong>Medial:</strong> Toward the midline of the body, such as the middle of the digestive tract.</li>
  <li><strong>Lateral:</strong> Away from the midline, such as the sides of the intestines.</li>
  <li><strong>Anterior (Ventral):</strong> Toward the front of the body, such as the front portion of the stomach.</li>
  <li><strong>Posterior (Dorsal):</strong> Toward the back of the body, such as the back part of the intestines.</li>
</ul>

<h3>8. The Concept of Homeostasis in the Digestive System</h3>
<p>The digestive system plays a vital role in maintaining homeostasis by providing the body with essential nutrients and energy. By breaking down food into simpler substances and absorbing nutrients, the digestive system ensures that cells receive the proper nutrients needed for growth, repair, and energy production. It also helps in the elimination of waste products, preventing the build-up of harmful substances in the body.</p>

<!-- Image Placeholder for Homeostasis -->
<div class="image-placeholder">
  <img src="path/to/your/image.jpg" alt="Homeostasis in Digestive System" />
</div>
`,
recap: "In this lesson, we have explored the structure and function of the digestive system, from the mouth to the large intestine. We have learned how digestion involves both mechanical and chemical processes, the role of enzymes and bile in breaking down food, and how the system absorbs nutrients and eliminates waste. Understanding the digestive system is crucial for maintaining health and preventing digestive disorders.",
resources: [
  {
    title:
      "Interactive Digestive System Atlas: Explore the human digestive system in 3D.",
    url: "https://example.com/intro-anatomy",
  },
  {
    title:
      "YouTube Video on Digestive System: A detailed overview of digestive anatomy and physiology.",
    url: "https://example.com/intro-anatomy",
  },
  {
    title:
      "Human Physiology by Stuart Fox: A comprehensive resource on digestion and other physiological processes.",
    url: "https://example.com/intro-anatomy",
  },
],
    },
    {
      id: 7,
      title: "Nervous System",
      description: "Overview of the brain, spinal cord, and peripheral nerves.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
      content:`<h2>Overview</h2>
<p>The nervous system is responsible for transmitting signals throughout the body, controlling and coordinating body activities. It consists of the brain, spinal cord, and a network of nerves that extend throughout the body. The nervous system helps regulate functions such as movement, sensation, cognition, and homeostasis.</p>

<!-- Image Placeholder for Nervous System Overview -->
<div class="image-placeholder">
  <img src="path/to/your/image.jpg" alt="Nervous System Overview" />
</div>

<h2>Lesson Content</h2>

<h3>1. What is the Nervous System?</h3>
<p>The nervous system is the body's communication network, responsible for sending, receiving, and processing nerve impulses. It allows the body to respond to internal and external stimuli. The system is divided into two main parts: the central nervous system (CNS) and the peripheral nervous system (PNS).</p>

<!-- Image Placeholder for Nervous System Structure -->
<div class="image-placeholder">
  <img src="path/to/your/image.jpg" alt="Nervous System Structure" />
</div>

<h3>2. Components of the Nervous System</h3>
<p>The nervous system consists of several key components, each with its specific function:</p>
<ul>
  <li><strong>Brain:</strong> The brain is the control center of the body. It processes sensory information, controls motor functions, and is responsible for cognition, emotions, and memory.</li>
  <li><strong>Spinal Cord:</strong> The spinal cord acts as a pathway for communication between the brain and the rest of the body. It transmits sensory and motor information and coordinates reflexes.</li>
  <li><strong>Nerves:</strong> Nerves are bundles of axons that carry electrical impulses to and from the brain and spinal cord. They are part of the peripheral nervous system.</li>
</ul>

<!-- Image Placeholder for Brain and Spinal Cord -->
<div class="image-placeholder">
  <img src="path/to/your/image.jpg" alt="Brain and Spinal Cord" />
</div>

<h3>3. The Central Nervous System (CNS)</h3>
<p>The central nervous system consists of the brain and spinal cord. It serves as the main processing center for information in the body.</p>
<ul>
  <li><strong>Brain:</strong> The brain is divided into several parts, each responsible for different functions:</li>
  <ul>
    <li><strong>Cerebrum:</strong> The largest part of the brain, responsible for higher functions such as thinking, memory, and voluntary movement.</li>
    <li><strong>Cerebellum:</strong> Located at the back of the brain, the cerebellum is responsible for coordinating movement, balance, and posture.</li>
    <li><strong>Brainstem:</strong> The brainstem connects the brain to the spinal cord and controls vital functions such as heart rate, breathing, and digestion.</li>
  </ul>
  <li><strong>Spinal Cord:</strong> The spinal cord is a long, tubular structure that extends from the brainstem down the vertebral column. It serves as a conduit for information traveling to and from the brain.</li>
</ul>

<!-- Image Placeholder for Central Nervous System -->
<div class="image-placeholder">
  <img src="path/to/your/image.jpg" alt="Central Nervous System" />
</div>

<h3>4. The Peripheral Nervous System (PNS)</h3>
<p>The peripheral nervous system connects the central nervous system to the limbs and organs. It is divided into two parts:</p>
<ul>
  <li><strong>Somatic Nervous System:</strong> The somatic system controls voluntary movements of skeletal muscles and conveys sensory information to the CNS.</li>
  <li><strong>Autonomic Nervous System:</strong> The autonomic system controls involuntary functions such as heart rate, digestion, and breathing. It has two branches:</li>
  <ul>
    <li><strong>Sympathetic Nervous System:</strong> This branch prepares the body for "fight or flight" responses, increasing heart rate and energy expenditure.</li>
    <li><strong>Parasympathetic Nervous System:</strong> The parasympathetic system promotes "rest and digest" functions, slowing heart rate and aiding in digestion.</li>
  </ul>
</ul>

<!-- Image Placeholder for Peripheral Nervous System -->
<div class="image-placeholder">
  <img src="path/to/your/image.jpg" alt="Peripheral Nervous System" />
</div>

<h3>5. Nerve Impulses and Communication</h3>
<p>Nerve impulses are electrical signals that transmit information throughout the body. Neurons, the cells of the nervous system, communicate by sending electrical impulses along their axons. These impulses travel across synapses (gaps between neurons) with the help of neurotransmitters. The communication process is essential for motor functions, sensory perception, and cognition.</p>

<!-- Image Placeholder for Nerve Impulse -->
<div class="image-placeholder">
  <img src="path/to/your/image.jpg" alt="Nerve Impulse Transmission" />
</div>

<h3>6. Reflexes and the Nervous System</h3>
<p>Reflexes are automatic, rapid responses to stimuli that do not require conscious thought. The spinal cord plays a central role in reflexes, acting as an intermediary between sensory input and motor output. A common example of a reflex is the patellar (knee-jerk) reflex.</p>

<!-- Image Placeholder for Reflexes -->
<div class="image-placeholder">
  <img src="path/to/your/image.jpg" alt="Reflex Action" />
</div>

<h3>7. Disorders of the Nervous System</h3>
<p>Several conditions can affect the nervous system, leading to various symptoms and complications:</p>
<ul>
  <li><strong>Parkinson's Disease:</strong> A neurodegenerative disorder that affects movement, causing tremors, stiffness, and slow movement.</li>
  <li><strong>Multiple Sclerosis:</strong> An autoimmune disease that damages the protective covering of nerve fibers in the CNS, impairing communication between the brain and the body.</li>
  <li><strong>Alzheimer's Disease:</strong> A progressive condition that affects memory, thinking, and behavior, eventually leading to loss of cognitive function.</li>
  <li><strong>Stroke:</strong> A stroke occurs when there is a disruption of blood flow to the brain, causing damage to brain cells and impairing neurological function.</li>
  <li><strong>Epilepsy:</strong> A disorder characterized by recurrent, unprovoked seizures due to abnormal electrical activity in the brain.</li>
</ul>

<!-- Image Placeholder for Nervous System Disorders -->
<div class="image-placeholder">
  <img src="path/to/your/image.jpg" alt="Nervous System Disorders" />
</div>

<h3>8. Anatomical Terminology for the Nervous System</h3>
<p>Understanding the anatomy of the nervous system requires knowledge of certain anatomical terms:</p>
<ul>
  <li><strong>Cranial:</strong> Refers to structures related to the skull or head region, such as cranial nerves.</li>
  <li><strong>Spinal:</strong> Refers to structures related to the spinal cord, such as spinal nerves.</li>
  <li><strong>Peripheral:</strong> Refers to structures outside the central nervous system, including peripheral nerves and ganglia.</li>
  <li><strong>Sympathetic:</strong> Refers to the part of the autonomic nervous system responsible for the "fight or flight" response.</li>
  <li><strong>Parasympathetic:</strong> Refers to the part of the autonomic nervous system responsible for "rest and digest" functions.</li>
</ul>

<h3>9. The Concept of Homeostasis in the Nervous System</h3>
<p>The nervous system plays a key role in maintaining homeostasis by regulating processes such as body temperature, heart rate, and blood pressure. It helps coordinate the body’s response to changes in the environment, ensuring that internal conditions remain stable despite external fluctuations.</p>

<!-- Image Placeholder for Homeostasis in Nervous System -->
<div class="image-placeholder">
  <img src="path/to/your/image.jpg" alt="Homeostasis and Nervous System" />
</div>`,
recap: "In this lesson, we have explored the structure and function of the nervous system, including the central and peripheral nervous systems. We have learned how neurons transmit electrical impulses, the role of reflexes in maintaining body functions, and how the nervous system maintains homeostasis. Understanding the nervous system is essential for recognizing and treating neurological disorders.",
resources: [
  {
    title:
      "Interactive Nervous System Atlas: Explore the human nervous system in 3D.",
    url: "https://example.com/intro-anatomy",
  },
  {
    title:
      "YouTube Video on Nervous System: An overview of nervous anatomy and physiology.",
    url: "https://example.com/intro-anatomy",
  },
  {
    title:
      "Neuroscience: Exploring the Brain by Mark Bear, Barry Connors, and Michael Paradiso: A comprehensive textbook on the nervous system.",
    url: "https://example.com/intro-anatomy",
  },
],
    },
    {
      id: 8,
      title: "Endocrine System",
      description: "Hormonal regulation and glands of the body.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
    },
    {
      id: 9,
      title: "Integumentary System",
      description: "Study of skin, hair, and nails.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
    },
    {
      id: 10,
      title: "Lymphatic System",
      description: "Immune defense and fluid balance.",
      videoUrl: "https://www.youtube.com/embed/fJZ99wZw-QM",
    },
  ],
  year2: [
    {
      id: 1,
      title: "Brain and Cranial Nerves",
      description: "Detailed study of brain anatomy and nerves.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
    },
    {
      id: 2,
      title: "Spinal Cord and Spinal Nerves",
      description: "In-depth exploration of spinal cord structures.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
    },
    {
      id: 3,
      title: "Musculoskeletal System",
      description: "Detailed anatomy of muscles and bones.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
    },
    {
      id: 4,
      title: "Cardiac Anatomy",
      description: "Detailed study of the heart and vascular anatomy.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
    },
    {
      id: 5,
      title: "Abdominal Cavity",
      description: "Anatomy of the abdomen and its organs.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
    },
    {
      id: 6,
      title: "Pelvic Anatomy",
      description: "Study of pelvic organs and structures.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
    },
    {
      id: 7,
      title: "Thoracic Anatomy",
      description: "Understanding the thoracic cavity and its contents.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
    },
    {
      id: 8,
      title: "Urinary System",
      description: "Anatomy of kidneys, bladder, and urinary tract.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
    },
    {
      id: 9,
      title: "Reproductive System",
      description: "Study of male and female reproductive anatomy.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
    },
    {
      id: 10,
      title: "Endocrine Glands",
      description: "Detailed anatomy of endocrine organs and glands.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
    },
  ],
};

export const microbiologyTopics = {
  year1: [
    {
      id: 1,
      title: "Introduction to Microbiology",
      description: "Overview of microbiology and the role of microorganisms.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
    },
    {
      id: 2,
      title: "Bacteria and Archaea",
      description:
        "Characteristics and classification of prokaryotic organisms.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
    },
    {
      id: 3,
      title: "Viruses and Virology",
      description: "Study of viruses, their structure, and their life cycles.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
    },
    {
      id: 4,
      title: "Microbial Nutrition",
      description: "The nutritional requirements and growth of microorganisms.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
    },
    {
      id: 5,
      title: "Microscopy and Staining Techniques",
      description: "Techniques for visualizing and identifying microorganisms.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
    },
    {
      id: 6,
      title: "Fungi and Protozoa",
      description:
        "Study of eukaryotic microorganisms, including fungi and protozoa.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
    },
    {
      id: 7,
      title: "Antimicrobial Agents",
      description:
        "Introduction to antibiotics, disinfectants, and their mechanisms.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
    },
    {
      id: 8,
      title: "Pathogenicity and Virulence",
      description: "How microorganisms cause diseases in humans.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
    },
    {
      id: 9,
      title: "Immunology Basics",
      description: "Overview of the immune system's response to pathogens.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
    },
    {
      id: 10,
      title: "Microbial Ecology",
      description: "The interactions of microorganisms in their environment.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
    },
  ],
  year2: [
    {
      id: 1,
      title: "Microbial Genetics",
      description: "The study of genetic material in microorganisms.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
    },
    {
      id: 2,
      title: "Bacterial Pathogenesis",
      description: "Mechanisms by which bacteria cause infections.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
    },
    {
      id: 3,
      title: "Viral Infections",
      description: "Study of viral diseases and the host immune response.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
    },
    {
      id: 4,
      title: "Antimicrobial Resistance",
      description:
        "Understanding mechanisms of drug resistance in microorganisms.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
    },
    {
      id: 5,
      title: "Fungal Infections",
      description:
        "Pathogenesis, diagnosis, and treatment of fungal infections.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
    },
    {
      id: 6,
      title: "Microbiome and Health",
      description: "The role of the microbiome in human health and disease.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
    },
    {
      id: 7,
      title: "Epidemiology",
      description:
        "Study of how diseases spread and how outbreaks are controlled.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
    },
    {
      id: 8,
      title: "Immunization and Vaccines",
      description:
        "The science behind vaccines and their role in preventing infections.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
    },
    {
      id: 9,
      title: "Laboratory Techniques in Microbiology",
      description:
        "Advanced laboratory techniques for diagnosing microbial infections.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
    },
    {
      id: 10,
      title: "Clinical Microbiology",
      description:
        "Microbiology in the clinical setting and its role in diagnosis and treatment.",
      videoUrl: "https://www.youtube.com/embed/H0nMbkXK4-E",
    },
  ],
};

export const pharmacologyTopics = {
  year1: [
    {
      id: 1,
      title: "Introduction to Pharmacology",
      description: "Overview of pharmacology and its basic principles.",
    },
    {
      id: 2,
      title: "Pharmacokinetics",
      description:
        "Study of drug absorption, distribution, metabolism, and excretion.",
    },
    {
      id: 3,
      title: "Pharmacodynamics",
      description: "Mechanisms of drug action on the body and receptors.",
    },
    {
      id: 4,
      title: "Autonomic Nervous System Drugs",
      description:
        "Drugs affecting the sympathetic and parasympathetic systems.",
    },
    {
      id: 5,
      title: "Antibiotics and Antimicrobials",
      description: "Types of antibiotics and their mechanisms of action.",
    },
    {
      id: 6,
      title: "Analgesics",
      description: "Pain relief drugs including opioids and NSAIDs.",
    },
    {
      id: 7,
      title: "Anti-inflammatory Drugs",
      description:
        "Drugs used to reduce inflammation, such as corticosteroids.",
    },
    {
      id: 8,
      title: "Vitamins and Nutritional Supplements",
      description:
        "Understanding the role of vitamins and supplements in health.",
    },
    {
      id: 9,
      title: "General Anesthetics",
      description: "Drugs used for inducing anesthesia and their mechanisms.",
    },
    {
      id: 10,
      title: "Drug Dosage and Administration",
      description:
        "Understanding proper drug dosage and routes of administration.",
    },
  ],
  year2: [
    {
      id: 1,
      title: "Pharmacology of the Central Nervous System",
      description:
        "Drugs acting on the brain and spinal cord, including antidepressants and antipsychotics.",
    },
    {
      id: 2,
      title: "Cardiovascular Pharmacology",
      description:
        "Drugs used to treat heart disease, including beta blockers and calcium channel blockers.",
    },
    {
      id: 3,
      title: "Chemotherapy and Anticancer Drugs",
      description:
        "Pharmacology of chemotherapy agents and their mechanisms in cancer treatment.",
    },
    {
      id: 4,
      title: "Toxicology",
      description:
        "Study of drug toxicity, overdose, and its effects on the body.",
    },
    {
      id: 5,
      title: "Antidiabetic Drugs",
      description:
        "Drugs used in the treatment of diabetes, including insulin and oral hypoglycemics.",
    },
    {
      id: 6,
      title: "Hormonal Drugs",
      description:
        "Drugs that influence hormonal systems, such as thyroid and contraceptive medications.",
    },
    {
      id: 7,
      title: "Drug Interactions",
      description:
        "Understanding how drugs interact with each other and affect therapeutic outcomes.",
    },
    {
      id: 8,
      title: "Immunopharmacology",
      description:
        "Drugs that modulate the immune system, such as immunosuppressants.",
    },
    {
      id: 9,
      title: "Pharmacogenomics",
      description:
        "The role of genetics in drug response and personalized medicine.",
    },
    {
      id: 10,
      title: "Clinical Pharmacology",
      description:
        "Application of pharmacological principles in clinical practice and patient care.",
    },
  ],
};

export const physiologyTopics = {
  year1: [
    {
      id: 1,
      title: "Introduction to Physiology",
      description: "Basic concepts of human physiology.",
    },
    {
      id: 2,
      title: "Cell Physiology",
      description: "Study of cell functions and membrane transport.",
    },
    {
      id: 3,
      title: "Nervous System Physiology",
      description: "Understanding the central and peripheral nervous systems.",
    },
    {
      id: 4,
      title: "Muscle Physiology",
      description: "How muscles contract and generate force.",
    },
    {
      id: 5,
      title: "Cardiovascular Physiology",
      description: "Blood circulation, heart function, and blood pressure.",
    },
    {
      id: 6,
      title: "Respiratory Physiology",
      description: "Mechanisms of breathing and gas exchange.",
    },
    {
      id: 7,
      title: "Renal Physiology",
      description: "Kidney functions and regulation of fluid balance.",
    },
    {
      id: 8,
      title: "Endocrinology",
      description: "Hormonal regulation and endocrine glands.",
    },
    {
      id: 9,
      title: "Digestion and Absorption",
      description: "Processes of digestion and nutrient absorption.",
    },
    {
      id: 10,
      title: "Acid-Base Balance",
      description: "Regulation of body pH and homeostasis.",
    },
  ],
  year2: [
    {
      id: 1,
      title: "Neurophysiology",
      description:
        "In-depth study of the brain, spinal cord, and nervous pathways.",
    },
    {
      id: 2,
      title: "Cardiac Physiology",
      description: "Heart rhythm, conduction, and myocardial function.",
    },
    {
      id: 3,
      title: "Endocrine Physiology",
      description:
        "Advanced study of hormone regulation and metabolic processes.",
    },
    {
      id: 4,
      title: "Gastrointestinal Physiology",
      description: "In-depth understanding of the digestive system functions.",
    },
    {
      id: 5,
      title: "Respiratory Regulation",
      description: "Control of breathing and gas exchange regulation.",
    },
    {
      id: 6,
      title: "Renal Regulation of Blood Pressure",
      description: "Kidney role in blood pressure and electrolyte balance.",
    },
    {
      id: 7,
      title: "Immunology and Physiology",
      description: "The immune system and its physiological roles.",
    },
    {
      id: 8,
      title: "Circulatory Physiology",
      description:
        "Blood flow, vascular resistance, and circulation regulation.",
    },
    {
      id: 9,
      title: "Thermoregulation",
      description:
        "Body temperature regulation and its physiological mechanisms.",
    },
    {
      id: 10,
      title: "Homeostasis",
      description:
        "The concept of balance and physiological regulation across systems.",
    },
  ],
};
