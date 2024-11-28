<template>
    <div>
      <div v-if="filteredData.length === 0" class="flex flex-col items-center justify-center rounded-2xl p-[15px] min-h-[250px] px-0 mt-4 bg-white border border-[#dee2e6]">
        <i class="mdi mdi-alert-circle-check" style="color: #dda129; font-size: 62px;"></i>
        <b class="text-center">Aucune donnée de consommation pour cette période</b>
      </div>
      <div v-else class="min-h-[250px] border border-solid border-[#dee2e6] flex items-center justify-center px-0 mt-4 bg-white rounded-[16px] p-[15px] overflow-hidden">
        <div class="h-full w-full">
          <div class="pt-3 pb-4 px-4 flex justify-end">
            <button 
                @click="downloadPDF" 
                :disabled="isLoading" 
                class="flex items-center py-2 mb-3 bg-[#fc0] text-black rounded-[30px] text-sm font-medium px-4 border-none"
                >
                <span v-if="isLoading">Chargement...</span>
                <span v-else>Télécharger en PDF</span>
            </button>
          </div>
      
          <div>
            <div class="header-arr w-full flex justify-center border-b pb-2 text-[#212529] text-base font-normal bg-[#fc0] py-[10px] px-[15px]">
              Total des consommations: {{ totalConsumption }} MB
            </div>
            <table class="table-auto w-full text-[15px] border-collapse bill-details-table text-[#212529]">
              <thead>
                <tr class="bg-[#343a40] border border-[#454d55]">
                  <th class="px-4 py-[15px] text-left text-white">Services</th>
                  <th class="px-4 py-[15px] text-left text-white">Consommation</th>
                </tr>
              </thead>
              <tbody>
                <tr 
                  v-for="(item, index) in filteredData" 
                  :key="index" 
                  :class="index % 2 === 0 ? 'bg-[#f2f2f2]' : ''"
                >
                  <td class="flex items-center p-3 gap-2">
                    <img :src="item.image" alt="" class="w-7 h-7 rounded-3xl">
                    <span>{{ item.service }}</span>
                  </td>
                  <td class="px-4">{{ item.consumption }} MB</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch, onMounted } from 'vue';
  import jsPDF from 'jspdf';
import 'jspdf-autotable';

const isLoading = ref(false);
  const props = defineProps({
    startDate: {
      type: Date,
      default: () => new Date()
    },
    endDate: {
      type: Date,
      default: () => new Date()
    }
  });
  
  const data = ref([
    { 
      service: 'Facebook', 
      consumption: 137.02, 
      image: '/Images/consommation/facebook.png', 
      date: new Date('2024-11-27') 
    },
    { 
      service: 'WhatsApp', 
      consumption: 70.72, 
      image: '/Images/consommation/whatsapp.png', 
      date: new Date('2023-10-02') 
    },
    { 
      service: 'Akamaihd', 
      consumption: 44.79, 
      image: '/Images/consommation/Akamaihd.png', 
      date: new Date('2023-10-03') 
    },
    { 
      service: 'AmazonS3', 
      consumption: 43.39, 
      image: '/Images/consommation/AmazonS3.png', 
      date: new Date('2023-10-04') 
    },
    { 
      service: 'SnapChat', 
      consumption: 31.37, 
      image: '/Images/consommation/snapchat.png', 
      date: new Date('2023-10-05') 
    },
    { 
      service: 'HTTPS', 
      consumption: 16.65, 
      image: '/Images/consommation/HTTPS.png', 
      date: new Date('2023-10-06') 
    },
    { 
      service: '38588', 
      consumption: 11.01, 
      image: '/Images/consommation/unknown.png', 
      date: new Date('2023-10-07') 
    },
    { 
      service: 'Crashlytics', 
      consumption: 10.33, 
      image: '/Images/consommation/crashlytics.png', 
      date: new Date('2023-10-08') 
    },
    { 
      service: '9823', 
      consumption: 9.37, 
      image: '/Images/consommation/unknown.png', 
      date: new Date('2023-10-09') 
    },
    { 
      service: 'AppleiCloud', 
      consumption: 7.22, 
      image: '/Images/consommation/AppleiCloud.png', 
      date: new Date('2023-10-10') 
    },
    { 
      service: 'GooglePhotos', 
      consumption: 6.39, 
      image: '/Images/consommation/GooglePhotos.png', 
      date: new Date('2023-10-11') 
    },
    { 
      service: 'UNKNOWN', 
      consumption: 6.27, 
      image: '/Images/consommation/unknown.png', 
      date: new Date('2023-10-12') 
    },
    { 
      service: 'YouTube', 
      consumption: 5.53, 
      image: '/Images/consommation/youtube.png', 
      date: new Date('2023-10-13') 
    },
    { 
      service: 'Unity3D', 
      consumption: 4.40, 
      image: '/Images/consommation/unity3d.png', 
      date: new Date('2023-10-14') 
    },
    { 
      service: 'ITunes', 
      consumption: 3.36, 
      image: '/Images/consommation/itunes.png', 
      date: new Date('2023-10-15') 
    },
    { 
      service: 'GoogleSearch', 
      consumption: 2.96, 
      image: '/Images/consommation/GoogleSearch.png', 
      date: new Date('2023-10-16') 
    },
    { 
      service: 'Google_Common', 
      consumption: 2.77, 
      image: '/Images/consommation/google_common.png', 
      date: new Date('2023-10-17') 
    },
    { 
      service: 'Slack', 
      consumption: 2.69, 
      image: '/Images/consommation/slack.png', 
      date: new Date('2023-10-18') 
    },
    { 
      service: 'WebMail_Gmail', 
      consumption: 2.05, 
      image: '/Images/consommation/webmail_gmail.png', 
      date: new Date('2023-10-19') 
    },
    { 
      service: 'Apple_', 
      consumption: 2.00, 
      image: '/Images/consommation/apple_service.png', 
      date: new Date('2023-10-20') 
    },
    { 
      service: 'SSL', 
      consumption: 1.92, 
      image: '/Images/consommation/ssl.png', 
      date: new Date('2023-10-21') 
    },
    { 
      service: 'IOS_PushMessage', 
      consumption: 1.91, 
      image: '/Images/consommation/IOS_PushMessage.png', 
      date: new Date('2023-10-22') 
    },
    { 
      service: 'Apple_Siri', 
      consumption: 0.49, 
      image: '/Images/consommation/Apple_Siri.png', 
      date: new Date('2023-10-23') 
    },
    { 
      service: 'AppleGameCenter', 
      consumption: 0.31, 
      image: '/Images/consommation/AppleGameCenter.png', 
      date: new Date('2023-10-24') 
    },
    { 
      service: 'Facebook_Messenger', 
      consumption: 0.29, 
      image: '/Images/consommation/facebook_messenger.png', 
      date: new Date('2023-10-25') 
    },
    { 
      service: 'Spotify', 
      consumption: 0.25, 
      image: '/Images/consommation/spotify.png', 
      date: new Date('2023-10-26') 
    },
]);

  
  const filteredData = ref([]);
  
  const totalConsumption = computed(() => {
    return filteredData.value.reduce((acc, item) => acc + item.consumption, 0).toFixed(2);
  });
  
  const selectedStartDate = ref(null);
const selectedEndDate = ref(null);

const filterData = () => {
  // Utilisez les dates sélectionnées comme nouvelle référence
  props.startDate = selectedStartDate.value;
  props.endDate = selectedEndDate.value;

  if (!props.startDate || !props.endDate) {
    filteredData.value = data.value;
    return;
  }

  const filtered = data.value.filter(item => {
    const itemDate = new Date(item.date.setHours(0, 0, 0, 0));
    const startDate = new Date(props.startDate.setHours(0, 0, 0, 0));
    const endDate = new Date(props.endDate.setHours(0, 0, 0, 0));

    return itemDate >= startDate && itemDate <= endDate;
  });

  filteredData.value = filtered;
};
  // Observe les changements des props de date
  watch([() => props.startDate, () => props.endDate], () => {
    filterData();
  });
  
  // Filtrage initial au montage
  onMounted(() => {
    filterData();
  });
  const convertImageToBase64 = (imagePath) => {
  return new Promise((resolve, reject) => {
    // Vérifiez si l'image existe dans le chemin public
    const fullPath = import.meta.env.VITE_BASE_URL 
      ? `${import.meta.env.VITE_BASE_URL}${imagePath}` 
      : imagePath;

    fetch(fullPath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Image not found');
        }
        return response.blob();
      })
      .then(blob => {
        return new Promise((resolveBlob, rejectBlob) => {
          const reader = new FileReader();
          reader.onloadend = () => resolveBlob(reader.result);
          reader.onerror = rejectBlob;
          reader.readAsDataURL(blob);
        });
      })
      .then(base64 => {
        resolve(base64);
      })
      .catch(error => {
        console.error('Error converting image:', error);
        resolve(null); // Résout avec null au lieu de rejeter
      });
  });
};

const downloadPDF = async () => {
  isLoading.value = true; // Démarrer le chargement

  const doc = new jsPDF();

  // Fonction pour formater la date
  const formatDate = (date) => {
    if (!date || isNaN(new Date(date).getTime())) {
      return "Date invalide"; // Retourne un texte par défaut si la date est invalide
    }
    const validDate = new Date(date);
    const day = String(validDate.getDate()).padStart(2, '0');
    const month = String(validDate.getMonth() + 1).padStart(2, '0');
    const year = validDate.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Ajout de la date et du numéro
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text(`Date: ${formatDate(new Date())}`, 14, 20);
  doc.text(`Numéro: 53843978`, 14, 28);

  // Ajout de la période
  doc.setFontSize(8);
  doc.text(`Période: ${formatDate(props.startDate)} au ${formatDate(props.endDate)}`, 140, 20, { align: "right" });

  // Ajout du titre principal avec fond noir
  doc.setFillColor(0, 0, 0); // Couleur noire
  doc.rect(14, 36, 180, 10, "F"); // Rectangle noir
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255); // Couleur du texte blanc
  doc.text("Relevé des consommations Internet", 105, 43, { align: "center", justify: "center" });

  // Réinitialisation de la couleur du texte pour le tableau
  doc.setTextColor(0, 0, 0);

  // Transformation des données pour le tableau
  const tableData = await Promise.all(
    filteredData.value.map(async (item) => {
      const imgBase64 = await convertImageToBase64(item.image).catch(() => null);
      return [
        imgBase64 ? { image: imgBase64, width: 8, height: 8, } : "", // Image en base64
        item.service,
        `${item.consumption} MB`,
        item.image
      ];
    })
  );

  // Création du tableau avec `autoTable`
  doc.autoTable({
    head: [["", "Applications / Site Web", "Consommation"]],
    body: tableData,
    startY: 46.5, // Ajuste la position du tableau
    styles: { fontSize: 8, cellPadding: 3 },
    theme: "plain", // Pas de bordures inutiles
    headStyles: { fillColor: [242, 242, 242], textColor: [0, 0, 0], fontStyle: "bold",  },
    bodyStyles: { fillColor: [242, 242, 242] },
    alternateRowStyles: { fillColor: [255, 255, 255] },
    columnStyles: {
      0: { cellWidth: 20, halign: "center",
      
      didParseCell: (data) => {
      if (data.cell.raw && data.cell.raw.image) {
        const imgWidth = data.cell.raw.width;
        const imgHeight = data.cell.raw.height;

        // Calcul de la position de l'image
        const x = data.cell.x + (data.cell.width / 2) - (imgWidth / 2); // Centrer l'image
        const y = data.cell.y + (data.cell.height / 2) - (imgHeight / 2); // Centrer l'image

        doc.addImage(data.cell.raw.image, 'PNG', x, y, imgWidth, imgHeight);
        data.cell.text = ""; // Ne pas afficher le texte par défaut
      }
    }
      
      
       },
      1: { cellWidth: 120 },
      2: { cellWidth: 40, halign: "right" },
    },
   
  });

  // Sauvegarder le PDF
  doc.save("consommation_internet.pdf");
 isLoading.value = false; // Arrêter le chargement
}; 


  </script>
  
  <style scoped>
  .bill-details-table {
    margin-bottom: 0;
    padding-bottom: 0;
  }
  </style>